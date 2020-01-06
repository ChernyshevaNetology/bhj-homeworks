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
const closeModal = () => {

 if (modalMain) {
    modalMain.classList.remove('modal_active');
  } 
  if (modalSuccess) {
    modalSuccess.classList.remove('modal_active');
  }  
}

// показываем кнопку "сделать хорошо" по нажатию на кнопку и скрываем первое модальное окно, чтобы не было наложения
const showSuccessModal = () => {
  modalMain.classList.remove('modal_active');
  modalSuccess.classList.add('modal_active'); 
}

// закрываем окно по нажатию на  - хорошо сделано - 
const closeSuccessModal = () => {
 modalSuccess.classList.remove('modal_active');  
}

close.forEach(el => el.onclick = closeModal);

btnRed.onclick = showSuccessModal;
btnSuccess.onclick = closeSuccessModal;

}






