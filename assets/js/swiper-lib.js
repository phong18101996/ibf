var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetweenSlides: 10,
        },
        767: {
            slidesPerView: 4,
            spaceBetweenSlides: 20,
        },
    }
});