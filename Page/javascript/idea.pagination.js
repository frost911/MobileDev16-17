
$.widget("idea.pagination", {
   

pagination: function(){


    $("#current_page").val(0);
    var idea_count = $(".idea_count").val();
    console.log(idea_count);

    //calculate the amount of pages we need
    var pages_count = Math.ceil(idea_count / 10);

    $("#current_page").val(0);
   var navigation_html = '<a class="previous_link" href="javascript:previous();">Prev</a>';  
    var current_link = 0;  
    while(number_of_pages > current_link){  
        navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';  
        current_link++;  
    }  
    navigation_html += '<a class="next_link" href="javascript:next();">Next</a>';

    $("#page_navigation").html(navigation_html);

    //add active class to the first page link  
    $("#page_navigation .page_link:first").addClass("active");

    //hide all idea elements 
    $(".idea").hide();

    //and show the first n (show_per_page) elements  
    $(".idea").slice(0, 10).show();
},
previous: function() {
    new_page = parseInt($("#current_page").val()) - 1;
    //if there is a page smaller then the current one 
    if ($(".active").prev(".page_link").length === true) {
        go_to_page(new_page);
    }
},
next: function () {
    new_page = parseInt($("#current_page").val()) + 1;
    //if there is an item after the current active link run the function  
    if ($(".active").next(".page_link").length === true) {
        go_to_page(new_page);
    }
},
go_to_page: function(page_num) {
    //get the number of items shown per page  
    var show_per_page = parseInt($("#show_per_page").val());

    //get the element number where to start the slice from  
    start_from = page_num * 10;

    //get the element number where to end the slice  
    end_on = start_from + 10;

    //hide all children elements of idea_wrapper get specific items and show them  
    $(".idea").hide();
    $(".idea").slice(start_from, end_on).show();

    /*get the page link that has longdesc attribute of the current page and add active class to it 
     and remove that class from previously active page link*/
    $(".page_link[longdesc=" + page_num + "]").addClass("active").siblings(".active").removeClass("active");

    //update the current page input field  
    $("#current_page").val(page_num);
}

}); 