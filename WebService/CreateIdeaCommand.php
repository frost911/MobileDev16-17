<?php

class CreateIdeaCommand {

    public function execute($request) {
        $service = new IdeaService();

        $idea = new Idea();
        $idea->title = $request["title"];
        $idea->description = $request["description"];

        $result = $service->createIdea($idea);
        if ($result->status_code === IdeaService::INVALID_INPUT) {
            http_response_code(400);
            return $result->validation_messages;
        }
        if ($result->status_code === IdeaService::DATABASE_ERROR) {
            http_response_code(500);
            return;
        }
        if ($result->status_code === IdeaService::OK) {
            http_response_code(201);
            header("Location: /MobileDev16-17/webservice/ideas/$result->id");
            return;
        }
    }

}

?>