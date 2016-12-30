<?php
class DeleteIdeaCommand{
	public function execute($request){
		$service = new IdeaService();
		$result = $service->deleteIdea($request["id"]);
		if($result->status_code === IdeaService::DATABASE_ERROR){
			http_response_code(500);
			return;
		}
		if($result->status_code === IdeaService::OK){
			http_response_code(201);
			return;
		}
	}
}
?>