$.widget("idea.menuBar", {
    _create: function () {
        var that = this;
        $.ajax({
            type: 'GET',
            url: "../WebService/GetUser.php",
            dataType: "json",
            data: {get_param: 'User'},
            success: function (data) {
                $(".current_user").text(data.User);
                console.log(data);
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