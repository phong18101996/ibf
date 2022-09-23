$(document).ready(function() { 
    $('.announcements-slider-event').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
    });
    $('.single-item').slick({
        prevArrow: false,
        nextArrow: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1000,
    });
    // $(window).on('load', function() {
    //     $('#exampleModal').modal('show');
    // });
   
});