<?php

class GetUserCommand {

    public function execute($request) {
        $service = new IdeaService();
        $user = $service->getUser();

        if ($user === IdeaService::DATABASE_ERROR) {
            http_response_code(500);
            return;
        }
        if ($user === IdeaService::NOT_FOUND) {
            http_response_code(404);
            return;
        }
        return $user;
    }
}
?>
