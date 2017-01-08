<?php

require "Idea.php";
require "IdeaService.php";
require "GetIdeaCommand.php";
require "GetIdeasCommand.php";
require "CreateIdeaCommand.php";
require "CreateIdeaResult.php";
require "DeleteIdeaCommand.php";
require "UpdateIdeaCommand.php";

class RequestHandler {

    public function handleRequest() {
        $request = $_REQUEST;
        if ($_SERVER["REQUEST_METHOD"] == "PUT") {
            parse_str(file_get_contents("php://input"), $body_parameters);
            $request = $request + $body_parameters;
            if ($request["title"] == "") {
                header("HTTP/1.1 400");
                $validation_messages = array();
                $validation_messages["title"] = "Der Titel ist eine Pflichtangabe. Bitte geben Sie einen Titel an.";
                echo json_encode($validation_messages);
                return;
            }
        }
        header("Cache-Control: no-cache, no-store, must-revalidate");
        $class_name = $request["command"];
        $command = new $class_name;
        $result = $command->execute($request);
        if ($result !== NULL) {
            echo(json_encode($result));
        }
    }

}

$request_handler = new RequestHandler();
$request_handler->handleRequest();
?>