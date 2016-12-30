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
			this.element.find(".description").text(idea.description);
	}
});