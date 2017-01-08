$.widget("idea.editDialog", $.ui.dialog,{
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
		],
		width: 550
	},
	open: function(idea){
                if(idea.accepted === "Ja!"){
                    this.element.find("#accepted_field").prop("checked", true);
                }
                else
                {
                    this.element.find("#accepted_field").prop("checked", false);
                }
                console.log(idea);
		this._idea = idea;
		this.element.find("#title_field").val(idea.title);
		this.element.find("#description_field").val(idea.description);
                this.element.find("#comment_field").val(idea.comment);
		this.element.find(".validation_message").empty();
		this.element.find("#title_field").removeClass("ui-state-error");
		this._super();
	},
	_create: function(){
		var that = this;
		var ok = this.options.buttons[0];
		ok.click = function(){
			var idea = {
				title: that.element.find("#title_field").val(),
				description: that.element.find("#description_field").val(),
                                comment: that.element.find("#comment_field").val(),
                                accepted: document.getElementById("accepted_field").checked  
			};
                        console.log(idea);
			$.ajax({
				type: "PUT",
				url: that._idea.url,
				data: idea,
				headers: { "If-Match": that._idea.version},
				success: function(){
					that.close();
					that._trigger("onIdeaEdited");
				},
				error: function(response){
					that.element.find(".validation_message").empty();
					that.element.find("#title_field").removeClass("ui-state-error");
					if(response.status == 400){
						var validationMessages = $.parseJSON(response.responseText);
						that.element.find(".validation_message").text(validationMessages.title);
						that.element.find("#title_field").addClass("ui-state-error").focus();
					}
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