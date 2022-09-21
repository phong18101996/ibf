$(document).ready(function() { 
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