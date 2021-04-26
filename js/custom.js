$(document).ready(function () {

    "use strict";




    //    clints slick
    $(".clints-slider").slick({

        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        cssEase: 'ease-in-out',
        touchThreshold: 100,
        responsive: [

            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
    }, {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
    },
        ]

    });



});
