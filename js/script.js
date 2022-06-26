$(document).ready(function () { 

    $(".menu").hide();
    $(".menuFilter").hide();
    $(".menu-list li").hide();
    
    $( "header .open" ).click(function() {
        $( ".menu" ).fadeIn(400);
        $( ".menuFilter" ).fadeIn(400);
        $(".menu-list li").delay(200).each(function(i) {
            $(this).delay(100 * i).fadeIn(700);
        });
    });
    
    $( "header .close" ).click(function() {
        $( ".menu" ).fadeOut(400);
        $( ".menuFilter" ).fadeOut(400);
        $(".menu-list li").fadeOut(400);
    });
    
});