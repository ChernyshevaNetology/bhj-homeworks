const fontSize = document.querySelector('.book__control_font-size');
const fontColor = document.querySelector('.book__control_color');
const BGcolor = document.querySelector('.book__control_background')
const book = document.getElementById('book');
const blackBG = document.querySelector('.book__control_background .color_black');
const grayBG = document.querySelector('.book__control_background .color_gray');
const blackFont = document.querySelector('.book__control_color .color_black');
const grayFont = document.querySelector('.book__control_color .color_gray');
let activeFontAtr = book.querySelector(".font-size_active").getAttribute("data-size");
let activeColorAtr = book.querySelector(".color_active").getAttribute("data-color");
let activeColorBG = book.querySelector(".bg_active").getAttribute("data-bg");

function setFont(e) {
    const fontActive = book.querySelector('.font-size_active');
    // при клике на активный класс выходим из функции, так как ничего делать не надо.
    e.preventDefault();
    if (e.target.classList.contains('font-size_active')) {
        return;
    }
    // убираем класс у активного элемента
    fontActive.classList.remove('font-size_active');
    //добавляем класс кликнутому элементу
    e.target.classList.add('font-size_active');

    // меняем шрифт в зависимости от значения атрибута data-size
    if (activeFontAtr) book.classList.remove(`book_fs-${activeFontAtr}`);

    activeFontAtr = e.target.getAttribute("data-size");

    if (activeFontAtr) book.classList.add(`book_fs-${activeFontAtr}`);
}

function setFontColor(e) {
    const colorActive = book.querySelector('.color_active');

    // при клике на активный класс выходим из функции, так как ничего делать не надо.
    e.preventDefault();
    if (e.target.classList.contains('color_active') || e.target.textContent) {
        return;
    }
    // убираем класс у активного элемента
    colorActive.classList.remove('color_active');
    //добавляем класс кликнутому элементу
    e.target.classList.add('color_active');

    // меняем цвет в зависимости от значения атрибута data-color
    if (activeColorAtr) book.classList.remove(`book_color-${activeColorAtr}`);

    activeColorAtr = e.target.getAttribute('data-color');

    if (activeColorAtr) book.classList.add(`book_color-${activeColorAtr}`);
}

function setBGcolor(e) {
    const BGactive = book.querySelector('.bg_active');
    // при клике на активный класс выходим из функции, так как ничего делать не надо.
    e.preventDefault();
    if (e.target.classList.contains('bg_active') || e.target.textContent) {
        return;
    }
    // убираем класс у активного элемента
    BGactive.classList.remove('bg_active');
    //добавляем класс кликнутому элементу
    e.target.classList.add('bg_active');

    if (activeColorBG) book.classList.remove(`book_bg-${activeColorBG}`);

    activeColorBG = e.target.getAttribute('data-bg');

    if (activeColorBG) book.classList.add(`book_bg-${activeColorBG}`);
}



fontSize.addEventListener('click', setFont);
fontColor.addEventListener('click', setFontColor);
BGcolor.addEventListener('click', setBGcolor);