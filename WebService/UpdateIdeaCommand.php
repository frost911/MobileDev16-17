<?php
class UpdateIdeaCommand{
	public function execute($request){
		$service = new IdeaService();
		$request_headers = apache_request_headers();
		
		$idea = new Idea();
		$idea->title = $request["title"];
		$idea->description = $request["description"];
		$idea->id = $request["id"];
		$idea->version = $request_headers["If-Match"];
		
		$result = $service->updateIdea($idea);
		if($result->status_code === IdeaService::INVALID_INPUT){
			http_response_code(400);
			return $result->validation_messages;
		}
		if($result->status_code === IdeaService::DATABASE_ERROR){
			http_response_code(500);
			return;
		}
		if($result->status_code === IdeaService::VERSION_OUTDATED){
			http_response_code(412);
			return;
		}
		if($result->status_code === IdeaService::NOT_FOUND){
			http_response_code(404);
			return;
		}
		if($result->status_code === IdeaService::OK){
			http_response_code(201);
			header("Location: /MobileDev/webservice/ideas/$result->id");
			return;
		}
	}
}
?>