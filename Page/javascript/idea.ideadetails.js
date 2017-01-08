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
			this.element.find(".title").text(idea.title);
			this.element.find(".author").text(idea.author);
                        this.element.find(".created").text(idea.created);
                        this.element.find(".updated").text(idea.updated);
			this.element.find(".description").text(idea.description);
                        this.element.find(".comment").text(idea.comment);
                        this.element.find(".accepted").text(idea.accepted);
	}
});