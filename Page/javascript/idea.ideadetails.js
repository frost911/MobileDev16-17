$.widget("idea.ideaDetails", {
    load: function (ideaUrl) {
        $.ajax({
            url: ideaUrl,
            dataType: "json",
            success: this._loadIdea,
            context: this
        });
    },
    _loadIdea: function (idea) {
        if (idea.updated === null) {
            idea.updated = "Kein Update bisher!";
        }
        if (idea.comment === null) {
            idea.comment = "Kein Kommentar Vorhanden!";
        }
        if (idea.accepted === null || idea.accepted === false || idea.accepted === 0 || idea.accepted === "0") {
            idea.accepted = "Nein!";
        }
        if (idea.accepted === true || idea.accepted == 1) {
            idea.accepted = "Ja!";
        }


        var diff = Math.abs(new Date() - new Date(idea.created.replace(/-/g,'/')));
      
        function msToTime(ms_input) {
        var ms = ms_input % 1000;
        ms_input = (ms_input - ms) / 1000;
        var secs = ms_input % 60;
        ms_input = (ms_input - secs) / 60;
        var mins = ms_input % 60;
        var hrs = (ms_input- mins) / 60;
        time = hrs + 'Stunden ' + mins + 'Minuten ' + secs + 'Sekunden ';
        return time;
        }
        age = msToTime(diff);
 
        this.element.find(".title").text(idea.title);
        this.element.find(".author").text(idea.author);
        this.element.find(".created").text(idea.created);
        this.element.find(".age").text(age);
        this.element.find(".updated").text(idea.updated);
        this.element.find(".description").text(idea.description);
        this.element.find(".comment").text(idea.comment);
        this.element.find(".accepted").text(idea.accepted);
    }
});
