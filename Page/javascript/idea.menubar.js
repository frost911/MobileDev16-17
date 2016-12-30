$.widget("idea.menuBar", {
	_create: function(){
		var that = this;
		this.element.find(".show_ideas").click(
			function(){
				that._trigger("onAllIdeasClicked");
				return false;
			}
			
		);
		this.element.find(".create_idea").click(
			function(){
				that._trigger("onCreateIdeaClicked");
				return false;
			}
			
		);
	}
});