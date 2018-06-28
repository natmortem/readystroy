$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        margin:30,
        navText : ['',''],
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            461:{
                items:2
            },
            768 : {
                items:3
            },
            992 : {
                items:4
            },
            1200:{
                items:5
            }
        }
    });

    $(".gallery").colorbox();

    $('.mobile-button').click(function () {
        alert("HeLlO!");
    });
});
