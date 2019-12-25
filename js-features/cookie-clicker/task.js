window.onload = function() {

let number = 0;
const cookie = document.getElementById('cookie');
const count = document.getElementById('clicker__counter');


function clicker () {
 count.textContent = ++number;
}

function toggleSize () {
  cookie.classList.toggle('checksize')
}


cookie.addEventListener('click', toggleSize);
cookie.onclick = clicker;

}
