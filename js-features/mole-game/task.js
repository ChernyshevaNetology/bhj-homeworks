let count = 0;
let missCount = 0;
const holes = document.querySelector('.hole-game');
const deadCount = document.getElementById('dead');
const lost = document.getElementById('lost');
const successCounter = n => deadCount.textContent = n;
const missCounter = n => lost.innerText = n;
successCounter(count);
missCounter(missCount);

const gameOn = () => {
  const mole = event.target.classList.contains('hole_has-mole');
  if (mole) {
     successCounter(++count); 
  } else {
      missCounter(++missCount);
  }
} 

const gameRes = () => {
  if (missCount > 4) {
      alert('Вы проиграли');
      missCount = 0;
      count = 0;
      deadCount.textContent = count;
      lost.textContent = missCount;
  }
  
  if (count > 5 && missCount < 5) {
      alert('Вы выиграли!');
      missCount = 0;
      count = 0;
      deadCount.textContent = count;
      lost.textContent = missCount; 
  } 
}

holes.addEventListener('click', gameOn)
holes.addEventListener('click', gameRes)





