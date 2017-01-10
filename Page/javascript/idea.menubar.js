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
                $(".current_user").text("Unbekannt");
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
    }
});