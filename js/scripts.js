$(document).ready(function() {


    var paddingTop;

    // ----------------------------

    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------    

    getFooterPosition();

    getCenterPosition();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ----------------------

        getCenterPosition();

    });


    $(function() {

        $(".card_num").mask("9999-9999-9999-99999999");

        $(".card_date").mask("99/99");

    });


    function getCenterPosition() {

        setTimeout(function() {

            paddingTop = ( $(".wrapper").height() - $(".center").height() - $(".footer").height() ) / 2;

            $(".content").css({
                paddingTop : paddingTop + "px"
            });

        }, 200);

    }


    function getFooterPosition() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        setFooterPositionInterval = setInterval(function() {

            contentCoor = $(".content").offset().top + $(".content").height();
            footerCoor = $(".footer").offset().top;

            if( contentCoor != footerCoor ) {

                $(".wrapper").css({"min-height" : $(window).height() + "px"});

                $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

                clearInterval(setFooterPositionInterval);

            }

        }, 35);

    }



});
