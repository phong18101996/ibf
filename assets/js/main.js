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
    $('.profile-slider-item').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        dots:false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1008,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        // autoplay: true,
        // autoplaySpeed: 1000,
    });

    $('.career-blog-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        dots:false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1008,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
        ],
        // autoplay: true,
        // autoplaySpeed: 1000,
    });

    // form subsribe

    // $(window).on('load', function() {
    //     $('#exampleModal').modal('show');
    // });

    // form thanks you
    
    // $(window).on('load', function() {
    //     $('#thanks-form').modal('show');
    // });


});
// stacked card
// $(document).ready(function() { 
//     var $card = $('.ibf-card');
//     var lastCard = $(".card-list .ibf-card").length - 1;

// $('.next').click(function(){ 
//     var $card = $('.ibf-card');
//     var lastCard = $(".card-list .ibf-card").length - 1;
// 	var prependList = function() {
// 		if( $('.ibf-card').hasClass('activeNow') ) {
// 			var $slicedCard = $('.ibf-card').slice(lastCard).removeClass('transformThis activeNow');
// 			$('.item').prepend($slicedCard);
// 		}
//         var $slicedCard = $('.ibf-card').slice(lastCard).removeClass('transformThis activeNow');
// 	}
// 	$('.item').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow');
// 	setTimeout(function(){prependList(); }, 150);
// });

// $('.prev').click(function() {
//     var $card = $('.ibf-card');
//     var lastCard = $(".card-list .ibf-card").length - 1;
// 	var appendToList = function() {
// 		if( $('.ibf-card').hasClass('activeNow') ) {
// 			var $slicedCard = $('.ibf-card').slice(0, 1).addClass('transformPrev');
// 			$('.card-list').append($slicedCard);
// 		}}
	
// 			$('.item').removeClass('transformPrev').last().addClass('activeNow').prevAll().removeClass('activeNow');
// 	setTimeout(function(){appendToList();}, 150);
// });
// });



$(document).ready(function() { 
    var $card = $('.ibf-card');
    var lastCard = $(".card-list .ibf-card").length - 1;

$('.next').click(function(){ 
    var $card = $('.ibf-card');
    var lastCard = $(".card-list .ibf-card").length - 1;
	var prependList = function() {
		if( $('.ibf-card').hasClass('activeNow') ) {
			var $slicedCard = $('.ibf-card').slice(lastCard).removeClass('transformThis activeNow');
			$('.ibf-card').prepend($slicedCard);
		}
        var $slicedCard = $('.ibf-card').slice(lastCard).removeClass('transformThis activeNow');
	}
	$('.ibf-card').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow');
	setTimeout(function(){prependList(); }, 150);
});

$('.prev').click(function() {
    var $card = $('.ibf-card');
    var lastCard = $(".card-list .ibf-card").length - 1;
	var appendToList = function() {
		if( $('.ibf-card').hasClass('activeNow') ) {
			var $slicedCard = $('.ibf-card').slice(0, 1).addClass('transformPrev');
			$('.card-list').append($slicedCard);
		}}
	
			$('.ibf-card').removeClass('transformPrev').last().addClass('activeNow').prevAll().removeClass('activeNow');
	setTimeout(function(){appendToList();}, 150);
});
});