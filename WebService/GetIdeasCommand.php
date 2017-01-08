<?php

class GetIdeasCommand {

    public function execute($request) {
        $service = new IdeaService();
        $ideas = $service->getIdeas();

        if ($ideas === IdeaService::DATABASE_ERROR) {
            http_response_code(500);
            return;
        }

        foreach ($ideas as $idea) {
            $idea->url = "/MobileDev16-17/WebService/ideas/$idea->id";
            unset($idea->id);
        }
        return $ideas;
    }

}

?>