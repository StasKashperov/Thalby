$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        autoplayTimeout:4000,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1100:{
                items:3
            }
        }
    });
});