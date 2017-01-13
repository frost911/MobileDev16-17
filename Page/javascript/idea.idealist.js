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

        console.log(ideas[0]["created"]);

        ideas.sort(function mysortfunction(a, b) {
            var o1 = a["updated"];
            var o2 = b["updated"];

            var p1 = a["created"];
            var p2 = b["created"];

            if (o1 < o2)
                return +1;
            if (o1 > o2)
                return -1;
            if (p1 < p2)
                return +1;
            if (p1 > p2)
                return -1;
            return 0;
        });

        //ideas.sort(function(obj1, obj2) {
        // Ascending: first age less than the previous
        //return obj1["created"] - obj2["created"];
        //});

        // ideas.sort(function(obj1, obj2) {
        // Ascending: first age less than the previous
        //return obj1["updated"] - obj2["updated"];
        // });





        for (var i = 0; i < ideas.length; i++) {
            var idea = ideas[i];




            var ideaElement = this.element.find(".template").clone().toggleClass('template idea');
            ideaElement.find(".title").text(idea.title);
            ideaElement.find(".author").text(idea.author);
            ideaElement.find(".created").text(idea.created);
            if (idea.accepted === null || idea.accepted === "0" || idea.accepted === 0 || idea.accepted === false) {
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
        }
    }
});