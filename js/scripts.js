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

        if( $(".st-h").length > 0 ) {

            paddingTop = ( $(window).height() - $(".center").height() - $(".footer").outerHeight(true) ) / 2 - $(".st-h").height();

        } else {

            paddingTop = ( $(window).height() - $(".center").height() - $(".footer").outerHeight(true) ) / 2;

        }

        $(".content").css({
            "padding-top" : paddingTop + "px"
        });

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
