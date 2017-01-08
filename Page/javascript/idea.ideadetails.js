$.widget("idea.ideaDetails",{
	load: function(ideaUrl){
		$.ajax({
			url: ideaUrl,
			dataType: "json",
			success: this._loadIdea,
			context: this
		});
	},
	_loadIdea: function(idea){
            
                        if(idea.updated === null){
                            idea.updated = "Kein Update bisher!";   
                        }
                        if(idea.comment === null){
                            idea.comment = "Kein Kommentar Vorhanden!";   
                        }
                        if(idea.accepted === null || idea.accepted === false || idea.accepted === 0 || idea.accepted === "0" ){
                            idea.accepted = "Nein!";   
                        }
                        if(idea.accepted === true){
                            idea.accepted = "Ja!";   
                        }                        
			this.element.find(".title").text(idea.title);
			this.element.find(".author").text(idea.author);
                        this.element.find(".created").text(idea.created);
                        this.element.find(".updated").text(idea.updated);
			this.element.find(".description").text(idea.description);
                        this.element.find(".comment").text(idea.comment);
                        this.element.find(".accepted").text(idea.accepted);
	}
});