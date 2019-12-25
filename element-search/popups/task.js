window.onload = function () {
const close = document.querySelectorAll('.modal__close');
const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const btnRed = document.querySelector('.btn_danger');
const btnSuccess = document.querySelector('.btn_success');

// выводим модальное окно при загрузке страницы
(function showModal() {
  modalMain.classList.add('modal_active')
}) ()

// скрываем модальное окно по нажатию на крестик
const closeModal = (e) => {

 if (modalMain) {
    modalMain.classList.remove('modal_active');
  } 
  if (modalSuccess) {
    modalSuccess.classList.remove('modal_active');
  }  
}

// показываем кнопку "сделать хорошо" по нажатию на кнопку
const showSuccessModal = () => {
  modalSuccess.classList.add('modal_active');
}

// меняем кнопки
const closeSuccessModal = () => {
 modalSuccess.classList.remove('modal_active');  
}

close.forEach(el => el.onclick = closeModal);
btnRed.onclick = showSuccessModal;
btnSuccess.onclick = closeSuccessModal;


}






