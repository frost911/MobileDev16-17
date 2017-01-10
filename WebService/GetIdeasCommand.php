<?php

class GetIdeasCommand {

    public function execute($request) {
        $service = new IdeaService();
        $count = $service->getIdeasCount(); //Ideas Count

        if ($request["page"] != "" || $request["page"] != 0 || $request["page"] != null) {
            $page = (int) $request["page"];
        }

        $page = isset($page) ? (int) $page : 1;   //Seite
        $pages = ceil($count / 10);          //Seitenzahl
        if ($pages < 1) {
            $pages = 1;
        }
        $offset = ($page - 1) * 10; // offset bis offset+10 wird im query abgefragt -> 10 Ideen pro Seite
        // Auf Seite 1 werden also Idee  0 - 9 (Seite 2, 10 - 19)

        $ideas = $service->getIdeas($offset);

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