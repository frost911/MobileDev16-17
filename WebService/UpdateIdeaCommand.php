<?php

class UpdateIdeaCommand {

    public function execute($request) {
        $service = new IdeaService();
        $request_headers = apache_request_headers();
        $idea = new Idea();
        $idea->title = $request["title"];
        $idea->description = $request["description"];
        $idea->id = $request["id"];
        $idea->comment = $request["comment"];
        
        //var_dump($request["accepted"]); //Debugging
        if($request["accepted"] == true || $request["accepted"] == "true"){
            $idea->accepted = 1;
        }
        if($request["accepted"] == false || $request["accepted"] == "" || $request["accepted"] == "false"){
            $idea->accepted = 0;
        }

        //var_dump($idea); die; //Debugging
        $idea->version = $request_headers["If-Match"];
        $result = $service->updateIdea($idea);
        if ($result->status_code === IdeaService::INVALID_INPUT) {
            http_response_code(400);
            return $result->validation_messages;
        }
        if ($result->status_code === IdeaService::DATABASE_ERROR) {
            http_response_code(500);
            return;
        }
        if ($result->status_code === IdeaService::VERSION_OUTDATED) {
            http_response_code(412);
            return;
        }
        if ($result->status_code === IdeaService::NOT_FOUND) {
            http_response_code(404);
            return;
        }
        if ($result->status_code === IdeaService::OK) {
            http_response_code(201);
            header("Location: /MobileDev/webservice/ideas/$result->id");
            return;
        }
    }

}

?>