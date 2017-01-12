<?php

class GetIdeaCommand {

    public function execute($request) {
        $service = new IdeaService();
        $idea = $service->getIdea($request["id"]);

        if ($idea === IdeaService::DATABASE_ERROR) {
            http_response_code(500);
            return;
        }
        if ($idea === IdeaService::NOT_FOUND) {
            http_response_code(404);
            return;
        }
        header("Etag: $idea->version");
        unset($idea->id);
        unset($idea->version);
        return $idea;
    }
}

?>