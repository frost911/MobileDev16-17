$.widget("idea.pagination", {
    load: function (idea_count) {
		var that = this;
        $("#current_page").val(0);
        //var idea_count = $(".idea_count").val();
        //calculate the amount of pages we need
        var pages_count = Math.ceil(idea_count / 10);

        $("#current_page").val(0);
        var navigation_html = '<a class="previous_link" href=' + 'javascript:$("#page_navigation").pagination("previous");' + '>Prev</a>';
        var current_link = 0;
        while (pages_count > current_link) {
            navigation_html += '<a class="page_link" href=' + 'javascript:$("#page_navigation").pagination("go_to_page",' + current_link + ') longdesc="' + current_link + '">' + (current_link + 1) + '</a>';
            current_link++;
        }
        navigation_html += '<a class="next_link" href=' + 'javascript:$("#page_navigation").pagination("next");' + '>Next</a>';

        $("#page_navigation").html(navigation_html);


        $("#page_navigation .page_link:first").addClass("active");
        $(".idea").hide();
        $(".idea").slice(0, 10).show();
    },
    previous: function () {
        var new_page = parseInt($("#current_page").val()) - 1;
        //if there is a page smaller then the current one 
        if ($(".active").prev(".page_link").length === true) {
            this.go_to_page(new_page);
        }
    },
    next: function (that) {
        var new_page = parseInt($("#current_page").val()) + 1;
        //if there is an item after the current active link run the function  
        if ($(".active").next(".page_link").length === true) {
            that.go_to_page(new_page);
        }
    },
    go_to_page: function (page_num) {
        //get the number of items shown per page  
        var show_per_page = parseInt($("#show_per_page").val());

        //get the element number where to start the slice from  
        var start_from = page_num * 10;

        //get the element number where to end the slice  
        var end_on = start_from + 10;

        //hide all children elements of idea_wrapper get specific items and show them  
        $(".idea").hide();
        $(".idea").slice(start_from, end_on).show();

        /*get the page link that has longdesc attribute of the current page and add active class to it 
         and remove that class from previously active page link*/
        $(".page_link[longdesc=" + page_num + "]").addClass("active").siblings(".active").removeClass("active");
        $("#current_page").val(page_num);
    }

}); 