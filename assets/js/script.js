// Insert script for youtube
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function onPlayerReady(event) {
    event.target.playVideo();
}



var widthW = $(window).width();
var widthH = $(window).height();

var objPlayerYoutube = {};
var objPlayerYoutubeMain = {};



function onYouTubeIframeAPIReady() {
    $('.wrapper-youtube-main-player').each(function () {
        youtubeId = $(this).attr('data-youtube-id');
        divId = $(this).attr('id');
        autoPlay = $(this).attr('data-auto-play');
        if (autoPlay == "1") {
            player = new YT.Player(divId, {
                height: '390',
                width: '640',
                videoId: youtubeId,
                playerVars: {
                    'autoplay': 1,
                    'controls': 0,
                    'mute': 1
                },
                events: {
                    'onReady': onPlayerReady
                }
            });
            objPlayerYoutubeMain[youtubeId] = player;
        }
    });
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


$(window).resize(function () {
    styleBannerAdmissions();

    if ($(window).width() <= 768) {
        $(".quicklinks-tab").eq(1).addClass("show");
        $(".quicklinks-tablinks").eq(1).addClass("active");
        $('.nav-section:has(.nav-item.contact-us)').hide();
    }
    else $('.nav-section:has(.nav-item.contact-us)').show();
    if ($(window).width() <= 1200 && (370 - $('.block-video').height()) > 0) {
        // $('.course-search-section ').css({ 'margin-bottom': 370 - $('.block-video').height() })
    }
    // else $('.course-search-section ').css({ 'margin-bottom': 0 })

});
$(document).ready(function () {
    stylesPopupVideo();
    closeVideoPopup();
    changeStylesBoxEvents();
    activeNavItem();
    styleBannerAdmissions();
    initArticleSlider();
    $('.course-filters').removeClass("col-9");
    $('.course-filters').addClass("col-12 col-xl-9");
    $('.course-filters .filter-label').removeClass("show");
    $('.course-filters .filter-label').removeClass("mobile");
    $(window).resize(function () {
        styleBannerAdmissions();
        stylesPopupVideo();
        closeVideoPopup();
    });
    // $('.course-filters.alway-expand .filter-label').addClass("show");

    if (!$('.course-filters').hasClass("alway-expand")) {
        $(".course-search-section").addClass('hideFilter');
    } else {
        $('.course-search-section ').css({ 'height': "100%" })
    }
    //

    if ($(window).width() <= 1200 && (370 - $('.block-video').height()) > 0) {
        //$('.course-search-section ').css({ 'margin-bottom': 370 - $('.block-video').height() })
    }
    // else $('.course-search-section ').css({ 'margin-bottom': 0 })

    $('.dropdown-btn .title .text').html($('.menu-dropdown .nav-section .nav-item.active').html());
    var descriptions = $('.mega-menu .title .description');
    for (var i = 0; i < descriptions.length; i++) {
        if (descriptions[i].innerText == "" || typeof descriptions[i].innerText == 'undefined') {
            descriptions[i].style.height = 0;
            descriptions[i].style.margin = 0;
        }
    }
    if (widthW < 768) {
        $(".quicklinks-tab").eq(0).addClass("show");
        $(".quicklinks-tablinks").eq(0).addClass("active");
        $('.nav-section:has(.nav-item.contact-us)').hide();
    }
    $('.upcoming-events-posts').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    });
    // $(".mega-menu").height($(".mega-menu").height() + 50);
    $(".sub-menu-item").click(function () {
        $(".sub-menu-item").removeClass("active");
        $(this).addClass("active");
        $(".mega-menu").height($(".active .sub-menu-content").height() + 100);
    });
    // Block Filter, multi select
    $('.input-multi-select').each(function () {
        var dataLabel = $(this).attr('data-label');
        // var optionAllLabel = $(this).attr('option-all-label');
        $(this).multiSelect({
            noneText: dataLabel,
            // presets: [
            //     {
            //         name: optionAllLabel,
            //         all: true
            //     },
            // ]
        });
    });

    $('.btn-search-course').on('click', function () {
        $('#form-search-course').submit();
    })

    $(window).scroll(function () {
        var height = $(".course-search-section").height();
        if ($(this).scrollTop() > height) {
            $(".filters").removeClass('show');
            $(".filters").removeClass('displayContent');
        }
    });
    $(".filter-label").click(function () {
        $(".filter-label").toggleClass('show');
        $(".course-search-section").toggleClass('hideFilter');
        $(".filters").toggleClass('show');
        if ($(".filters").hasClass('displayContent')) {
            $(".filters").removeClass('displayContent');
        } else setTimeout(function () {
            $(".filters").toggleClass('displayContent');
        }, 400);
    });


    // Play video 
    $('.btn-play-video').on('click', function () {

        var parentElement = $(this).parent().parent();
        $(parentElement).find('video').removeClass('hidden');

    });
    // Btn scroll to Top
    $(".scroll_to_top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".scroll_to_top").addClass('show');
        } else {
            $(".scroll_to_top").removeClass('show');
        }
    });

    //Action For Form Search
    $('#page-form-search .btn-search').on('click', function () {
        $('#page-form-search').submit();

    });

    $('#page-form-search .searchBox').on('keyup change', function () {
        if ($(this).val() != "") {
            $('#page-form-search .btn-remove-keywords').removeClass('hidden');
        }
    });

    $('#page-form-search .btn-remove-keywords').on('click', function () {
        $('#page-form-search .searchBox').val('');
        $(this).addClass('hidden');
    });

    $('#menu-form-search .btn-search').on('click', function () {
        $('#menu-form-search').submit();
    });

    $('.video-popup-custom').on('hidden.bs.modal', function (e) {
        video = $(this).find('.popup-video-player');
        if (video.length > 0) {
            id = $(video[0]).attr('data-id');
            videoMain = $('#block-video-' + id);
            if (videoMain.length > 0) {
                videoMain[0].play();
            }
            video[0].pause();
        }

        youtubeWrapper = $(this).find('.wrapper-youtube-player');
        if (youtubeWrapper.length > 0) {
            youtubeId = $(youtubeWrapper).attr('data-id');
            if (objPlayerYoutube.hasOwnProperty(youtubeId)) {
                objPlayerYoutube[youtubeId].stopVideo();
            }
        }
    });
    $('.video-popup-custom').on('show.bs.modal', function (e) {
        video = $(this).find('.popup-video-player');
        if (video.length > 0) {
            video[0].play();
        }

        youtubeWrapper = $(this).find('.wrapper-youtube-player');
        if (youtubeWrapper.length > 0) {
            youtubeId = $(youtubeWrapper).attr('data-id');
            // Stop Main Video
            if (objPlayerYoutubeMain.hasOwnProperty(youtubeId)) {
                objPlayerYoutubeMain[youtubeId].stopVideo();
            }

            if (objPlayerYoutube.hasOwnProperty(youtubeId)) {
                objPlayerYoutube[youtubeId].playVideo();
            } else {
                player = new YT.Player(youtubeWrapper[0], {
                    height: '390',
                    width: '640',
                    videoId: youtubeId,
                    playerVars: {
                        'playsinline': 1
                    },
                    events: {
                        'onReady': onPlayerReady
                    }
                });
                objPlayerYoutube[youtubeId] = player;
            }
        }
    });



    // BEGIN FOR EVENTS
    $('.btn-event-search').on('click', function () {
        $('#form-event-search').submit();
    });
    $(".btn-event-clear").click(function () {
        $(".events-value").val('');
        $('#form-event-search').submit();
    });
    $(".events-value").on('change', function () {
        if ($(this).val() == "") {
            $('.btn-event-clear').addClass('hidden');
        } else {
            $('.btn-event-clear').removeClass('hidden');
        }
    })
    // END FOR EVENTS


    // BEGIN HISTORY PAGE
    $('.scroll-to-year-section').on('click', function () {
        $('.tab-years .active').removeClass('active');
        $(this).find('p').addClass('active');
    });
    
    
    $('.research-table-td').each(function() {
        var listBox = $(this).find('.multiple-box .box:first-child');
        var minHeight = 0;
        for (var i=0; i< listBox.length; i++) {
            if (minHeight < $(listBox[i]).height()) {
                minHeight = $(listBox[i]).height();
            }
        }
        
        for (var i=0; i< listBox.length; i++) {
            $(listBox[i]).css('min-height', minHeight+'px');
        }
    });
    
    

});

function stylesPopupVideo() {
    var video_popup_w = $(".block-video").outerWidth();
    var video_popup_h = $(".block-video .video-wrapper").outerHeight();

    if (video_popup_w == 0) {
        video_popup_w = $(window).width() * 0.75;
        video_popup_h = $(window).height() * 0.75;
    }

    $(".pos").css({ "width": video_popup_w, "height": video_popup_h });
    $(".modal-content").css({ "width": video_popup_w, "height": video_popup_h });
    $(".video-popup").css({ "max-width": video_popup_w, "height": video_popup_h });
}
function closeVideoPopup() {
    if ($(".block-video").width() < 767) {
        $(".pos").hide();
    } else {
        $(".pos").show();
    }
}
function openMegaMenuMobile() {
    $(".main-menu-mobile").show();
    $(".sub-menu").show();
    $("hr").show();
    if (!$(".nav-btn").hasClass('open')) {
        $(".nav-btn").addClass('open');
        $(".mega-menu-mobile").addClass('open');
        setTimeout(function () {
            $("main").addClass('open-mega-menu-mobile');
        }, 500);
    }
    else {
        $(".nav-btn").removeClass('open');
        $(".mega-menu-mobile").removeClass('open');
        $("main").removeClass('open-mega-menu-mobile');
        $(".dropdown").removeClass('open');
        $(".sub-nav-links").removeClass('show');
    }
}
function openSearchMobile() {
    $(".nav-btn").addClass('open');
    $(".mega-menu-mobile").addClass('open');
    setTimeout(function () {
        $("main").addClass('open-mega-menu-mobile');
    }, 500);
    $(".main-menu-mobile").hide();
    $(".sub-menu").hide();
    $("hr").hide();
}
function openSubNav(n) {
    $('.dropdown-' + n).toggleClass('open');
    $('.sub-nav-link-' + n).toggleClass('show');
}
function toggleSearch() {
    $(".search-box-content").toggleClass("show");
    // $(".banner").toggleClass("openSearch");
}
function openTab(n) {
    $(".quicklinks-tab").removeClass('show');
    $(".quicklinks-tab").eq(n).addClass("show");
    $(".quicklinks-tablinks").removeClass('active');
    $(".quicklinks-tablinks").eq(n).addClass("active");
}
function changeStylesBoxEvents() {
    if ($(".group-calendar-events .box .item").length == 0) {
        $(".group-calendar-events .box").css("box-shadow", "unset");
    }
}

$(".menu-anchor").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
});
$(".anchor-history").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
});
// $(".list-menu").hide();
$(".dropdown-btn").on("click", function () {
    $(".nav-section").toggleClass("show");
    $(".select-down").toggleClass("open");
    $(".dropdown-btn").toggleClass("open");
});
$(".nav-section a .nav-item").on("click", function () {
    $(".nav-section a .nav-item").removeClass("active");
    $(this).addClass("active");
});
function activeNavItem() {
    $(".nav-section a").each(function () {
        if ($(this).attr('href').split("#")[1]) {
            if ($(this).attr('href').split("#")[1] == window.location.href.split("#")[1]) {
                $(this).children(".nav-item").addClass("active");
            }
        }
    });
}
function initArticleSlider() {
    $('.article-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        nextArrow: '.article-slider-next',
        prevArrow: '.article-slider-prev',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                }
            },
        ]
    });
    
    
    //Auto Open tab
}
$(".anchor-history p").click(function () {
    if ($(".anchor-history p").hasClass('active')) {
        $('.active').removeClass();
    }
    $(this).addClass("active");
});
$(".accordion-event").click(function () {
    if ($(this).find("img").hasClass("dropdown-open")) {
        $(this).find("img").removeClass("dropdown-open");
    } else {
        $(this).find("img").addClass("dropdown-open");
    }

    if ($(this).find(".notification").hasClass("notification-close")) {
        $(this).find(".notification").removeClass("notification-close");
    } else {
        $(this).find(".notification").addClass("notification-close");
    }


    // if ($(this).hasClass("dropdown-open")) {
    //     $(this).removeClass("dropdown-open");
    // } else {
    //     $(this).addClass("dropdown-open");
    // }
    // if ($(this).parent().find(".notification").hasClass("notification-close")) {
    //     $(this).parent().find(".notification").removeClass("notification-close");
    // } else {
    //     $(this).parent().find(".notification").addClass("notification-close");
    // }
});
$(".student-support-event").click(function () {
    if ($(this).find("span").hasClass("dropdown-open")) {
        $(this).find("span").removeClass("dropdown-open");

        if ($(this).find("span").hasClass("default")) {
            $(this).find("span").removeClass("default");
        } else {
            $(this).find("span").addClass("default");
        }

    } else {
        $(this).find("span").addClass("dropdown-open");
        $(this).find("span").removeClass("default");
    }

    if ($(this).find(".title").hasClass("open-dropdown")) {
        $(this).find(".title").removeClass("open-dropdown");
    } else {
        $(this).find(".title").addClass("open-dropdown");
    }

    if ($(this).parent().find(".content").hasClass("open-content")) {
        $(this).parent().find(".content").removeClass("open-content");
    } else {
        $(this).parent().find(".content").addClass("open-content");
    }
});
function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("block-image-cards");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    const currentUrl = window.location.origin + window.location.pathname;
    var newUrl = currentUrl + "?tab="+cityName;
    history.pushState(null, "", newUrl);
    
    
}
function openFilterTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("filter-tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
function styleBannerAdmissions() {
    var banner_height = $(".banner-content").outerHeight();
    var total = banner_height + 50;
    $(".banner-img").css({ "min-height": total });

}