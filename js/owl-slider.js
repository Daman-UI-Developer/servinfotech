// BRAND-SLIDER

$(document).ready(function () {
    $("#brand-slider").owlCarousel({
        items: 5,
        loop: true,
        center: false,
        autoplay: true,
        mouseDrag: false,
        margin: 50,
        dots: false,
        nav: false,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                nav: false,
            },
            600: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 5,
            }
        }
    });
});

// BRAND-SLIDER

// SERVICE-SLIDER

$(document).ready(function () {
    $("#service-slider").owlCarousel({
        items: 5,
        loop: true,
        center: true,
        autoplay: true,
        mouseDrag: false,
        margin: 0,
        dots: false,
        nav: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                nav: false,
            },
            600: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 5,
            }
        }
    });
});

// SERVICE-SLIDER