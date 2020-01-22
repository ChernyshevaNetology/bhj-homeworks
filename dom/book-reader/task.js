const fontSize = document.querySelector('.book__control_font-size');
const fontColor = document.querySelector('.book__control_color');
const BGcolor = document.querySelector('.book__control_background')
const BGoptions = document.querySelectorAll('.book__control_background .color');
const els = document.querySelectorAll('.font-size');
const colorOptions = document.querySelectorAll('.book__control_color .color');
const book = document.getElementById('book');
const blackBG = document.querySelector('.book__control_background .color_black');
const grayBG = document.querySelector('.book__control_background .color_gray');
const blackFont = document.querySelector('.book__control_color .color_black');
const grayFont = document.querySelector('.book__control_color .color_gray')

function setFont(e) {
    // при клике на активный класс выходим из функции, так как ничего делать не надо.
    e.preventDefault();
    if (e.target.classList.contains('font-size_active')) {
        return;
    }
    // убираем класс у активного элемента
    els.forEach(el => el.classList.remove('font-size_active'));

    //добавляем класс кликнутому элементу
    e.target.classList.add('font-size_active');

    // меняем шрифт в зависимости от значения атрибута data-size
    if (e.target.getAttribute("data-size") === 'small') {
        book.classList.remove('book_fs-big');
        book.classList.add('book_fs-small');
    }

    if (e.target.getAttribute("data-size") === 'big') {
        book.classList.remove('book_fs-small');
        book.classList.add('book_fs-big');
    }

    if (!e.target.getAttribute("data-size")) {
        book.classList.remove('book_fs-big') || book.classList.remove('book_fs-small');
    }
}

function setFontColor(e) {
    // при клике на активный класс выходим из функции, так как ничего делать не надо.
    e.preventDefault();
    if (e.target.classList.contains('color_active') || e.target.textContent) {
        return;
    }
    // убираем класс у активного элемента
    colorOptions.forEach(el => el.classList.remove('color_active'));

    //добавляем класс кликнутому элементу
    e.target.classList.add('color_active');

    // меняем цвет в зависимости от значения атрибута data-color
    if (e.target.getAttribute("data-color") === 'gray') {
        book.classList.remove('book_color-whitesmoke')
        book.classList.add('book_color-gray');
    }

    if (e.target.getAttribute("data-color") === 'whitesmoke') {
        book.classList.remove('book_color-gray')
        book.classList.add('book_color-whitesmoke');
    }

    if (!e.target.getAttribute("data-color")) {
        book.classList.remove('book_color-gray') || book.classList.remove('book_color-whitesmoke');
    }
}

function setBGcolor(e) {
    // при клике на активный класс выходим из функции, так как ничего делать не надо.
    e.preventDefault();
    if (e.target.classList.contains('color_active') || e.target.textContent) {
        return;
    }

    // убираем класс у активного элемента
    BGoptions.forEach(el => el.classList.remove('color_active'));

    //добавляем класс кликнутому элементу
    e.target.classList.add('color_active');

    // меняем фон в зависимости от значения атрибута data-color
    if (e.target.getAttribute("data-color") === 'black') {
        book.classList.remove('color_gray')
        book.classList.add('color_black');
    }

    if (e.target.getAttribute("data-color") === 'gray') {
        book.classList.remove('color_black');
        book.classList.add('color_gray');
    }
    if (!e.target.getAttribute("data-color")) {
        book.classList.remove('color_gray') || book.classList.remove('color_black');
    }
}

function checkMatch() {
    if (!book.classList.contains('book_color-gray') && !book.classList.contains('book_color-whitesmoke')) {
        blackBG.style = "display: none";
    } else {
        blackBG.style = "display: block";
    }

    if (book.classList.contains('book_color-gray')) {
        grayBG.style = "display: none"
    } else {
        grayBG.style = "display: block"
    }

    if (book.classList.contains('color_gray')) {
        grayFont.style = "display: none";
    } else {
        grayFont.style = "display: block";
    }

    if (book.classList.contains('color_black')) {
        blackFont.style = "display: none";
    } else {
        blackFont.style = "display: block";
    }
}


document.addEventListener("DOMContentLoaded", checkMatch)
fontSize.addEventListener('click', setFont);
fontColor.addEventListener('click', setFontColor);
BGcolor.addEventListener('click', setBGcolor);
book.addEventListener('click', checkMatch);