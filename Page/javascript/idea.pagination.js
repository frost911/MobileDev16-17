$.widget("idea.pagination", {
    _giveCount: function () {
        //get count from GetIdeaCountCommand.php
        var count = 0;
        $.ajax({
            type: 'GET',
            url: "../Webservice/RequestHandler.php?command=GetIdeaCountCommand",
            dataType: "int",
            success: function (data) {
               count = data; 
               console.log(data);
            } 
        });
        console.log(count);
        //get current page from ??? application.js??
        //count / 10 = pages
        //replace pagination_link with href, pagination_link_number with page number

       /* var that = this;
        for (var i = 0; i < count; i++) {
            var idea = ideas[i];
            var ideaElement = this.element.find(".template").clone().toggleClass('template idea');
            ideaElement.find(".title").text(idea.title);
            ideaElement.find(".author").text(idea.author);
            ideaElement.find(".created").text(idea.created);
            if (idea.accepted === null || idea.accepted === "0" || idea.accepted === 0|| idea.accepted === false) {
                idea.accepted = "Nein!";
            } else {
                idea.accepted = "Ja!";
            }
            ideaElement.find(".accepted").text(idea.accepted);
            ideaElement.click(idea.url, function (event) {
                that._trigger("onIdeaClicked", null, event.data);
            });
            ideaElement.find(".delete_idea").click(idea.url, function (event) {
                that._trigger("onDeleteClicked", null, event.data);
                return false;
            });
            ideaElement.find(".edit_idea").click(idea, function (event) {
                that._trigger("onEditClicked", null, event.data);
                return false;
            });
            this.element.append(ideaElement);
        } */
    }
});