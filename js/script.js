$(document).ready(function () { 

    $(".menu").hide();
    $(".menuFilter").hide();
    
    $( "header .menu-icon" ).click(function() {
        $( ".menu" ).fadeIn(300);
        $( ".menuFilter" ).fadeIn(300);
    });
    
    $( ".menuFilter" ).click(function() {
        $( ".menu" ).fadeOut(300);
        $( ".menuFilter" ).fadeOut(300);
    });
    
});