{
    let textContent = document.querySelector('.text-content');
    if(textContent) {
        let figureBoxAll = textContent.querySelectorAll('figure');
        if(figureBoxAll.length) {
            figureBoxAll.forEach(figure => {
                let iframe = figure.querySelector('iframe');
                let images = figure.querySelectorAll('img');
                if(iframe) {
                    figure.classList.add('iframe');
                }
                if(images.length > 1) {
                    figure.classList.add('multiple');
                }
            })
        }
    }
}