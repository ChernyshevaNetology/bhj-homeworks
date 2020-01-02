const menuItem = document.querySelectorAll('.menu__item');
const menuLink = document.querySelectorAll('.menu__link');
const menuSub = document.querySelector('.menu_sub');


function displayMenu (e) {
if (e.target.nextElementSibling) {
    e.preventDefault();
    e.target.nextElementSibling.classList.add("menu_active");
}
  }

function removeActive (e) {
  const menuActive = document.querySelector('.menu_active');  
    if (menuActive) {
     menuActive.classList.remove('menu_active');
   }   
}

menuLink.forEach(el => el.onclick = displayMenu);
document.addEventListener('click', removeActive, true)

/*
Советы
С помощью методов closest, querySelector и querySelectorAll вы можете найти все подходящие элементы
closest позволит найти ближайшего родителя по CSS-селектору
querySelector позволит найти первый дочерний элемент по CSS-селектору
querySelectorAll позволит найти все дочерние элемент по CSS-селектору
Для вложенных меню вы обязаны возвращать false в обработчиках события для предотвращения перехода по ссылке.
*/


/*

let menuArr = document.getElementsByClassName('menu__link');

for(let menu of Array.from(menuArr)) {
	menu.onclick = () => {
		if(menu.parentElement.querySelector('.menu_sub').classList.contains('menu_active')) {
			console.log('contains');
			menu.parentElement.querySelector('.menu_sub').classList.remove('menu_active');
			return false;
		}
		if(menu.parentElement.querySelector('.menu_sub')) {
			menu.parentElement.querySelector('.menu_sub').classList.add('menu_active');
			return false;
		}
	}
}

*/