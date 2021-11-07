{
    let popupGalleryAll = document.querySelectorAll('.popup-gallery');
    if (popupGalleryAll.length) {
        popupGalleryAll.forEach(gallery => {
            let mySwiper;
            let thumb;
            let slider = gallery.querySelector('.popup-gallery__slider');

            thumb = new Swiper(gallery.querySelector('.popup-gallery__thumb .swiper-container'), {
                observer: true,
                observeParents: true,
                slidesPerView: 'auto',
                spaceBetween: 20,
                speed: 800,
                watchOverflow: true,
                preloadImages: false,
                freeMode: true,
                watchSlidesProgress: true,
                lazy: {
                    loadPrevNext: true,
                },
                watchSlidesVisibility: true,
            });




            mySwiper = new Swiper(slider.querySelector('.swiper-container'), {
                effect: document.documentElement.clientWidth < 768 ? 'slide' : 'fade',
                watchSlidesProgress: true,
                watchSlidesVisibility: true,
                observer: true,
                observeParents: true,
                speed: 800,
                preloadImages: false,
                lazy: {
                    loadPrevNext: true,
                },
                thumbs: {
                    swiper: thumb,
                },
                navigation: {
                    nextEl: gallery.querySelector('.slider-btn-next'),
                    prevEl: gallery.querySelector('.slider-btn-prev'),
                },
                breakpoints: {
                    320: {
                        slidesPerView: 'auto',
                        spaceBetween: 0,
                        direction: 'vertical',
                        freeMode: true,
                        
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        direction: 'horizontal',
                        freeMode: false,
                    },
                },
            });




        })
    }
}