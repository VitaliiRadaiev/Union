{
    let promo = document.querySelector('.promo');
    if (promo) {

        let dataSlider = new Swiper(promo.querySelector('.swiper-container'), {
            effect: 'fade',
            autoplay: {
                delay: 12000,
                disableOnInteraction: false,
            },
            
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            preloadImages: false,
            lazy: {
            	loadPrevNext: true,
            },
        });
    }
}
