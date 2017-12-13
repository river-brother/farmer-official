$(document).ready(function () {

    //nav fixed top
    (function () {
        var next = $("#nav").next();
        var nav_height = $("#nav").outerHeight();
        next.css({
            'margin-top':nav_height+'px'
        });
    })();

    $(window).scroll(function () {
        var top = $("html,body").scrollTop();
        var winHeight = $(window).height();

        if(top>=winHeight*0.4){
            $("#small").fadeIn('slow');
        }else{
            $("#small").fadeOut('slow');
        }
    });

    $("#top").click(function () {

        $("html,body").animate({"scrollTop":0},300);
    });

});

