const banners = [...document.querySelectorAll('.reveal')];
const viewPort = window.innerHeight;

window.addEventListener('scroll', function () {

    banners.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const bottom = el.getBoundingClientRect().bottom;
        if (top < viewPort - (viewPort * 0.1) && bottom > 0) {
            el.classList.add('reveal_active');
        } else {
            el.classList.remove('reveal_active');
        }
    })
});