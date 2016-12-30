$.widget("idea.deleteDialog", $.ui.dialog,{
	options:{
		autoOpen: false,
		modal: true,
		buttons: [
			{
				text: "Ok"
			},
			{
				text: "Abbrechen"
			}
		]
	},
	open: function(ideaUrl){
		this._ideaUrl = ideaUrl;
		this._super();
	},
	_create: function(){
		var that = this;
		var ok = this.options.buttons[0];
		ok.click = function(){
			that.close();
			$.ajax({
				type: "DELETE",
				url: that._ideaUrl,
				success: function(){
					that._trigger("onIdeaDeleted");
				}
			});
		};
		var cancel = this.options.buttons[1];
		cancel.click = function(){
			that.close();
		};
		this._super();
	}
});