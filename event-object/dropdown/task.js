const button = document.querySelector('.dropdown');
const menu = document.querySelector('.dropdown__list');
let textValue = document.querySelector('.dropdown__value');
const menuItem = document.querySelectorAll('.dropdown__list  .dropdown__item');

const showMenu =  () =>  {
 menu.classList.toggle('dropdown__list_active');
}

const changeText = e => {
 e.preventDefault();
 textValue.innerText = e.target.innerText;
}

button.onclick = showMenu;
[...menuItem].forEach(el => el.addEventListener('click', changeText));

