//свайпер section Cases

document.addEventListener('DOMContentLoaded', ()  => { 
    const swiper__cases = new Swiper('.Cases__swiper__container', {
        initialSlide: 0,
        spaceBetween: 20,
        grabCursor: true,
        direction: 'horizontal',
        slidesPerView: 'auto',
        autoplay: {
            delay: 10000,
            disableOnInteraction: true
        },
        speed: 3000,
    
        // Navigation arrows
        navigation: {
            nextEl: '.Cases__swiper__arrow-next',
            prevEl: '.Cases__swiper__arrow-prev',
        },
    
        keyboard: true,
    })
})