$.widget("idea.menuBar", {
    _create: function () {
        var that = this;
        $.ajax({
            type: 'GET',
            url: "../Webservice/RequestHandler.php?command=GetUserCommand",
            dataType: "json",
            data: {get_param: 'User'},
            success: function (data) {
                $(".current_user").text(data);
                //console.log(data); //Debug
            },
            error: function () {
                $(".current_user").hide();
            }
        });
        this.element.find(".show_ideas").click(
                function () {
                    that._trigger("onAllIdeasClicked");
                    return false;
                }
        );
        this.element.find(".create_idea").click(
                function () {
                    that._trigger("onCreateIdeaClicked");
                    return false;
                }
        );
        $.ajax({
            type: 'GET',
            url: "../Webservice/RequestHandler.php?command=GetIdeaCountCommand",
            dataType: "json",
            success: function (data) {
               $(".idea_count").text(data);
			   $("#page_navigation").pagination("load", data);
			   return false;
            },
            error: function () {
                $(".idea_count").hide();
            }
        });
    }
});