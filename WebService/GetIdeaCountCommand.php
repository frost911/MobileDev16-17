<?php

class GetIdeaCountCommand {

    public function execute($request) {
        $service = new IdeaService();
        $count = $service->getIdeasCount();

        if ($count === IdeaService::DATABASE_ERROR) {
            http_response_code(500);
            return;
        }
        if ($count === IdeaService::NOT_FOUND) {
            http_response_code(404);
            return;
        }
        return $count;
    }
}
?>
