window.onload = function () {

const timer = document.querySelector('#timer');
 
 const countDown = () => {
    timer.textContent -=1;

if (timer.textContent == 0) {
    clearInterval(interval)
    requestAnimationFrame( () => requestAnimationFrame(winner) ) 
}

 }
const interval = setInterval( countDown, 1000 )

const winner = () => alert('Вы победили в конкурсе!')

}




