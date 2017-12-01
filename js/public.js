$(document).ready(function () {

    $(window).scroll(function () {
        var top = $("html").scrollTop();
        var winHeight = $(window).height();

        if(top>=winHeight*0.4){
            $("#top").fadeIn('slow');
        }else{
            $("#top").fadeOut('slow');
        }
    });

    $("#top").click(function () {

        $("html,body").animate({"scrollTop":0},300);
    });
});

