$(document).ready(function()
{ 
 $(".gear-check").click(function()
    {
        $(".coloroption").fadeToggle();    
    });
    //change theme color on click//
    var colorli = $(".coloroption ul li")
    
    $(".coloroption ul li")
    .eq(0).css("backgroundColor","#E8CE0E").end()
    .eq(1).css("backgroundColor","#e41b17").end()
    .eq(2).css("backgroundColor","#1ce038").end()
    .eq(3).css("backgroundColor","#2570d2")
    
    
    colorli.click(function()
    {
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
      // console.log( $(this).attr("data-value") ) //
    });
    
    //cashing the scroll top element//
    var scrollButton = $("#scroll-top");
    
    $(window).scroll(function()
    {
        
        ( $(this).scrollTop() >= 700 )? scrollButton.show(): scrollButton.hide();
        
    });
//Click On Button To The Scroll Top//
        
    scrollButton.click(function()
    {
        $("html,body").animate({ scrollTop:0}, 600);
    });
     "use strict";
    
    //Nice Scroll//
    
    $("html").niceScroll();
});

//loading screen//

$(window).load(function()
{           
    $(".overlay .spinner").fadeOut(1200,                      
    function()
    {
	$ ("body").css("overflow","auto");

        $(this).parent().fadeOut(1200,
        function()
        {
            $(this).remove();
        });                         
    });
});
