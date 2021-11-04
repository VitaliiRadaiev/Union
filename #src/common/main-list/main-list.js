{
    let mainList = document.querySelector('.main-list');
    if (mainList) {
        let items = Array.from(document.querySelectorAll('.main-list li'));

        let arrStak = [];

        setInterval(() => {

            if (arrStak.length) {
                let arr = arrStak;
                arrStak = [];
                let count = 0;
                let id = setInterval(() => {
                    if (count >= arr.length) {
                        clearInterval(id);
                        return;
                    }
                    arr[count]();
                    count++;

                }, 300);
            }
        }, 100)

        const colorThief = new ColorThief();
        const mainListHandler = () => {
            items.forEach(item => {
                
                if (item.getBoundingClientRect().top < document.documentElement.clientHeight) {
                    if (!item.classList.contains('loaded')) {
                        item.classList.add('loaded');
                        arrStak.push(() => {
                            item.classList.add('show');
                            let loader = document.createElement('div');
                            loader.className = 'loader';
                            let bg = item.querySelector('.main-list__bg');
                            let lazyImage = item.querySelector('.main-list__bg img');
                            lazyImage.after(loader);
                            lazyImage.src = lazyImage.dataset.src;

                            lazyImage.onload = () => {
                                loader.remove();
                                bg.style.background = `rgb(${colorThief.getColor(lazyImage).join(',')})`;
                                
                                setTimeout(() => {
                                    lazyImage.classList.add('show');
                                }, 1000)
                            }
                        })
                    }
                }
            })
        }
        mainListHandler();
        window.addEventListener('scroll', mainListHandler);
    }
}