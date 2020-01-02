const images = document.querySelectorAll('.slider .slider__items .slider__item');
const next = document.querySelector('.slider__arrow_next');
const back = document.querySelector('.slider__arrow_prev');
let i = 0;

function showNextImage() {
 images[i].classList.remove('slider__item_active');
 i++;
 console.log(i)
 if (i >= images.length) {
    i = 0;
 }

 images[i].classList.add('slider__item_active')
}

function showPrevImage() {
 images[i].classList.remove('slider__item_active');
 i--;
 console.log(i)

if (i < 0) {
    i = images.length-1;
 }
 images[i].classList.add('slider__item_active')
}

next.onclick = showNextImage;
back.onclick = showPrevImage;






