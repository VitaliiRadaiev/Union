let homaPage = document.querySelector('.home-page');
if(homaPage) {
    anime.timeline({
        easing: 'easeInOutQuad',
    })
    .add({
        targets: '.header__logo',
        translateY: ['-100%', '0%'],
        opacity: [0, 1],
        duration: 600,
        delay: 800,
    })
    .add({
        targets:['.menu__list li'],
        opacity: [0, 1],
        translateY: ['-100%', '0%'],
        delay: (el, i) => 100 * i,
        duration: 200,
    }, '-=200')
    .add({
        targets:['.header__copy'],
        opacity: [0, 1],
        translateY: ['-100%', '0%'],
        duration: 400,
    })
    .add({
        targets:['.promo__title'],
        opacity: [0, 1],
        translateY: ['100%', '0%'],
        duration: 400,
    })
    .add({
        targets:['.footer'],
        opacity: [0, 1],
        translateY: ['100%', '0%'],
        duration: 400,
    }, '-=200');
}