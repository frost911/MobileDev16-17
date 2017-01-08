$(function() {
	$(document).ajaxError(function(event, response){
		if(response.status == 400){
			return;
		}
		$("#error_dialog").errorDialog("open", response.statusText);
		$("#idea_details").hide();
                $("#idea template").hide();
		$("#idea_list").show();
		if(response.status == 404){
			$("#idea_list").ideaList("reload");
		}
	});
	$(document).ajaxStart(function(){
		$.blockUI({message: null});
	});
	$(document).ajaxStop(function(){
		$.unblockUI();
	});
	$("#idea_details").ideaDetails();
	$("#error_dialog").errorDialog();
	$("#create_dialog").createDialog(); // ????????
	$("#edit_dialog").editDialog({
		onIdeaEdited: function(){
			$("#idea_list").ideaList("reload");
		}
	});
	$("#delete_dialog").deleteDialog({
		onIdeaDeleted: function(){
			$("#idea_details").hide();
			$("#idea_list").ideaList("reload");
			$("#idea_list").show();
		}
	});
	$("#idea_list").ideaList({
		onIdeaClicked: function(event, ideaUrl){
			$("#idea_details").ideaDetails("load", ideaUrl);
			$("#idea_details").show();
			$("#idea_list").hide();
		},
		onDeleteClicked: function(event, ideaUrl){
			$("#delete_dialog").deleteDialog("open", ideaUrl);
		},
		onEditClicked: function(event, idea){
			$("#edit_dialog").editDialog("open", idea);
		}
	});
	$("#menu_bar").menuBar({
		onAllIdeasClicked: function(){
			$("#idea_details").hide();
			$("#idea_list").show();
                        $("#idea_list").ideaList("reload");
		},
		onCreateIdeaClicked: function(){
			$("#idea_details").hide();
			$("#create_dialog").createDialog("open");
		}
	});
});