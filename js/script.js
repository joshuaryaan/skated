$(document).ready(function () { 

    $('.sort').click(function() {
         $(".sortMenu").animate({
            left: '-=280'
        }, 300 );
    });
    $('.close').click(function() {
         $(".sortMenu").animate({
            left: '+=280'
        }, 300 );
    });
    
});