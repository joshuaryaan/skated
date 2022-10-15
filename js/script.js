$(document).ready(function () { 

    $(".menu").hide();
    $(".menu-list li").hide();
    
    $( "header .open" ).click(function() {
        $( ".menu" ).fadeIn(400);
        $(".menu-list li").delay(200).each(function(i) {
            $(this).delay(100 * i).fadeIn(700);
        });
        $('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });
    });
    
    $( "header .close" ).click(function() {
        $( ".menu" ).fadeOut(400);
        $(".menu-list li").fadeOut(400);
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
    });
    
    
});