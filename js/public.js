$(document).ready(function () {
    wow = new WOW(
        {
            animateClass: 'animated',
            offset:       100,
            callback:     function(box) {

            }
        }
    );
    wow.init();

    $(window).scroll(function () {
        var top = $("html").scrollTop();
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

