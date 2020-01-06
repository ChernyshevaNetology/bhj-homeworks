const images = document.querySelectorAll('.slider .slider__items .slider__item');
const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
let i = 0;

function changeSlide (e) {

   if (e.target === next) {
    /* при быстром листании слайдера,
    срабатывает double-click, что приводит к выделению
    стрелки, как текста, убираем это функцией ниже */
    next.onselectstart = () => false;  
    images[i].classList.remove('slider__item_active');
    i++;
    
    i >= images.length ? i = 0 : i;

    images[i].classList.add('slider__item_active')
   }

   if (e.target === prev) {
    prev.onselectstart = () => false;  
    images[i].classList.remove('slider__item_active');
    i--;

    i < 0 ? i = images.length-1 : i;

    images[i].classList.add('slider__item_active')
   }
}

[prev,next].forEach(el => el.addEventListener('click', changeSlide));



/*

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
   images[i].classList.add('slider__item_active');
  }

next.onclick = showNextImage;
back.onclick = showPrevImage;

*/