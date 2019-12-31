window.onload = function () {

const timer = document.querySelector('#timer');
 
 const countDown = () => {
    timer.textContent -=1;

if (timer.textContent == 0) {
    clearInterval(interval)
    // через alert не доходит на нуля - останавливается на 1 - поэтому нашла способ через request animation frame
    requestAnimationFrame( () => requestAnimationFrame(winner) ) 
}
 }
const interval = setInterval( countDown, 1000 )

const winner = () => alert('Вы победили в конкурсе!')

}




