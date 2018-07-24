$(document).ready(function(){         

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $(".nav-barX").css({"background": "rgba(255, 218, 26, 0.95)", "transition": "1s"});             
        } else { 
            $(".nav-barX").css({"background": "none", "transition": "0.5s"});
        }
    });

});