{
    let header = document.querySelector('.header');
    if(header) {
        let isScroll = window.pageYOffset;
        window.addEventListener('scroll', () => {
            header.classList.toggle('is-scroll', window.pageYOffset > 50);

            if(window.pageYOffset > isScroll) {
                if(window.pageYOffset > header.clientHeight) {
                    header.classList.add('is-scrolling');
                    isScroll = window.pageYOffset;
                }
            } else if(window.pageYOffset < isScroll) {
                header.classList.remove('is-scrolling');
                isScroll = window.pageYOffset;
            }
        })




        let menu = document.querySelector('.menu');
        let burger = document.querySelector('.header__burger');
        let btnClose = document.querySelector('.menu__close');

        burger.addEventListener('click', () => {
            menu.classList.add('open');
            header.classList.add('menu-open');
            document.body.classList.add('lock');
        })
        btnClose.addEventListener('click', () => {
            menu.classList.remove('open');
            header.classList.remove('menu-open');
            document.body.classList.remove('lock');
        })
    }
}