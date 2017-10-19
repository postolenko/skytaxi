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

            // paddingTop = ( $(window).height() - $(".center").height() ) / 2  - ( $(window).height() - $(".footer").offset().top ) - $(".st-h").height();

            paddingTop = ( ( $(window).height() - $(".st-h").height() ) - ( $(window).height() - $(".footer").offset().top ) ) / 2;

        } else {

            paddingTop = ( $(window).height() - $(".center").height() - $(".footer").height() ) / 2 - ( $(window).height() - $(".footer").offset().top );

        }

        $(".content").css({
            paddingTop : paddingTop + "px"
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
