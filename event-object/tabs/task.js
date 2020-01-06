const tabs = [...document.querySelectorAll('.tab')];
const tabContent = [...document.querySelectorAll('.tab__content')];

const setActive = (e) => {
const index = tabs.indexOf(e.target);

tabs.forEach(el => el.classList.remove('tab_active'))
e.target.classList.add('tab_active');

tabContent.forEach(el => el.classList.remove('tab__content_active'));
tabContent[index].classList.add('tab__content_active')

}

[...tabs].forEach(el => el = el.addEventListener('click', setActive));






















// function setActive(e) {
//  tabs.forEach(el => el = el.classList.remove('tab_active'));
//     e.target.classList.add('tab_active');

// const index = tabs.indexOf(e.target);

// tabContent.forEach(el => el.style.display='none');
// tabContent[index].style.display='block';
   
// }