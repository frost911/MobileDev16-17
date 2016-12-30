$.widget("idea.createDialog", $.ui.dialog,{
	options:{
		autoOpen: false,
		modal: true,
		buttons: [
			{
				text: "Speichern"
			},
			{
				text: "Abbrechen"
			}
		],
		width: 550
	},
	open: function(){		
		this.element.find("#title_field").val("2");
		this.element.find("#description_field").val("1");
		this.element.find(".validation_message").empty();
		this.element.find("#title_field").removeClass("ui-state-error");
		this._super();
	},
	_create: function(){
		var that = this;
		var save = this.options.buttons[0];
		save.click = function(){
			var idea = {
				title: that.element.find("#title_field").val(),
				description: that.element.find("#description_field").val()
			};
			$.ajax({
				type: "POST",
				url: that._idea.url,
				data: idea,
				success: function(){
					that.close();
					that._trigger("onIdeaCreated");
				},
				error: function(response){
					that.element.find(".validation_message").empty();
					that.element.find("#title_field").removeClass("ui-state-error");
					if(response.status == 400 || response.status == 500){
						var validationMessages = $.parseJSON(response.responseText);
						that.element.find(".validation_message").text(validationMessages.title);
						that.element.find("#title_field").addClass("ui-state-error").focus();
					}
					//Verschiedene Status und Felder abfragen
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