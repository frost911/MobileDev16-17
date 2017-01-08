$.widget("idea.ideaList", {
    _create: function () {
        $.ajax({
            url: "/MobileDev16-17/WebService/ideas",
            dataType: "json",
            success: this._appendIdeas,
            context: this
        });
    },
    reload: function () {
        this.element.find(".idea:not(.template)").remove();
        $.ajax({
            url: "/MobileDev16-17/WebService/ideas",
            dataType: "json",
            success: this._appendIdeas,
            context: this
        });
    },
    _appendIdeas: function (ideas) {
        var that = this;
        for (var i = 0; i < ideas.length; i++) {
            var idea = ideas[i];
            var ideaElement = this.element.find(".template").clone().toggleClass('template idea');
            ideaElement.find(".title").text(idea.title);
            ideaElement.find(".author").text(idea.author);
            ideaElement.find(".created").text(idea.created);
            if (idea.accepted === null || idea.accepted === "0" || idea.accepted === 0) {
                idea.accepted = "Nein!";
            } else {
                idea.accepted = "Ja!";
            }
            ideaElement.find(".accepted").text(idea.accepted);
            if (idea.comment === null || idea.comment == "") {
                idea.comment = "Kein Kommentar Vorhanden!";
            } else{
                idea.comment = "Kommentar Vorhanden!";
            }
            ideaElement.find(".comment").text(idea.comment);
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
        }
    }
});