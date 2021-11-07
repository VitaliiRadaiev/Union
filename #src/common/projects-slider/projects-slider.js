{
    let projectsSliderAll = document.querySelectorAll('.projects-slider');
    if(projectsSliderAll.length) {
        projectsSliderAll.forEach(slider => {
            let sliderData = new Swiper(slider.querySelector('.swiper-container'), {
                
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                
                slidesPerView: 2,
                spaceBetween: 0,
                speed: 800,
                loop: true,
                preloadImages: false,
                lazy: {
                	loadPrevNext: true,
                },
                navigation: {
                    nextEl: slider.querySelector('.slider-btn-prev'),
                    prevEl: slider.querySelector('.slider-btn-next'),
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                    },
                    992: {
                        slidesPerView: 2,
                    }
                },
            });
        })
    }
}