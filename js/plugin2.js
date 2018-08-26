$(document).ready(function()
{ 
    "use strict";
    
    //Nice Scroll//
    
    $("html").niceScroll();

});

$(window).load(function()
{           
    $(".overlay .spinner").fadeOut(2000,                      
    function()
    {
	$ ("body").css("overflow","auto");

        $(this).parent().fadeOut(2000,
        function()
        {
            $(this).remove();
        });                         
    });
});
