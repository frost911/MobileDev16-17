<?php

class IdeaService {

    const DATABASE_ERROR = "DATABASE_ERROR";
    const NOT_FOUND = "NOT_FOUND";
    const INVALID_INPUT = "INVALID_INPUT";
    const OK = "OK";
    const VERSION_OUTDATED = "VERSION_OUTDATED";

    function updateIdea($idea) {
        $result = new CreateIdeaResult();
        if ($idea->title === '') {
            $result->validation_messages["title"] = "Der Titel ist eine Pflichtangabe. Bitte geben Sie einen Titel an.";
        }
        if (count($result->validation_messages) !== 0) {
            $result->status_code = IdeaService::INVALID_INPUT;
            return $result;
        }
        $statement = "UPDATE idea SET " .
                "title = '$idea->title', " .
                "description = '$idea->description', " .
                "comment = '$idea->comment', " .
                "accepted = '$idea->accepted', " .
                "version = version + 1 " .
                "WHERE id = $idea->id AND version = $idea->version";
        //var_dump($statement); die; //Debugging
        @$link = new mysqli("localhost", "root", "", "idealist");
        if ($link->connect_error !== NULL) {
            $result->status_code = IdeaService::DATABASE_ERROR;
            return $result;
        }
        $link->set_charset("utf8");
        $ret = $link->query($statement);
        if ($ret === FALSE) {
            $result->status_code = IdeaService::DATABASE_ERROR;
            $link->close();
            return $result;
        }
        if ($link->affected_rows === 0) {
            $select_statement = "SELECT COUNT(*) FROM idea WHERE id = $idea->id";
            $result_set = $link->query($select_statement);
            $row = $result_set->fetch_row();
            $count = intval($row[0]);
            if ($count === 0) {
                $result->status_code = IdeaService::NOT_FOUND;
            } else {
                $result->status_code = IdeaService::VERSION_OUTDATED;
            }
            $link->close();
            return $result;
        } else {
            $link->close();
        }
        $result->status_code = IdeaService::OK;
        return $result;
    }

    function deleteIdea($id) {
        $result = new CreateIdeaResult();
        $statement = "DELETE FROM idea WHERE id = $id";
        @$link = new mysqli("localhost", "root", "", "idealist");
        if ($link->connect_error !== NULL) {
            $result->status_code = IdeaService::DATABASE_ERROR;
            return $result;
        }
        $ret = $link->query($statement);
        if ($ret === FALSE) {
            $link->close();
            $result->status_code = IdeaService::DATABASE_ERROR;
            return $result;
        }
        $link->close();
        $result->status_code = IdeaService::OK;
        return $result;
    }

    function createIdea($idea) {
        $result = new CreateIdeaResult();
        $idea->author = $_SERVER['PHP_AUTH_USER'];
        if ($idea->title === '') {
            $result->validation_messages["title"] = "Der Titel ist eine Pflichtangabe. Bitte geben Sie einen Titel an.";
        }
        //felder überprüfen
        if (count($result->validation_messages) !== 0) {
            $result->status_code = IdeaService::INVALID_INPUT;
            return $result;
        }
        $statement = "INSERT INTO idea SET " .
                "title = '$idea->title', " .
                "author = '$idea->author', ".
                "version = 1, " .
                "description = '$idea->description'";
        @$link = new mysqli("localhost", "root", "", "idealist");
        if ($link->connect_error !== NULL) {
            $result->status_code = IdeaService::DATABASE_ERROR;
            return $result;
        }
        $link->set_charset("utf8");
        $ret = $link->query($statement);
        var_dump($ret);die;
        if ($ret === FALSE) {
            $link->close();
            $result->status_code = IdeaService::DATABASE_ERROR;
            return $result;
        }
        $result->id = $link->insert_id;
        $result->status_code = IdeaService::OK;
        $link->close();
        return $result;
    }

    function getIdea($id) {
        $statement = "SELECT id,   " .
                "author, created, updated, title, description, comment, accepted, version " .
                "FROM idea " .
                "WHERE id = $id";
        $idea = $this->callDatabase($statement);
        if (gettype($idea) === "string") {
            return $idea;
        }
        return $idea[0];
    }

    function getIdeas() {
        $statement = "SELECT id,   " .
                "author, created, updated, title, description, comment, accepted, version " .
                "FROM idea ";
        $ideas = $this->callDatabase($statement);     
        return $ideas;
    }

    function callDatabase($statement) {
        @$link = new mysqli("localhost", "root", "", "idealist");
        if ($link->connect_error !== NULL) {
            return IdeaService::DATABASE_ERROR;
        }
        $link->set_charset("utf8");
        $res = $link->query($statement);
        $result = array();
        $idea = $res->fetch_object("idea");
        if ($idea === NULL) {
            return IdeaService::NOT_FOUND;
        }
        while ($idea !== NULL) {
            $result[] = $idea;
            $idea = $res->fetch_object("idea");
        }
        $link->close();
        if ($result === []) {
            //error
        }
        return $result;
    }

}

?>