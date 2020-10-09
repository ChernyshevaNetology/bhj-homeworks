class Timer {
  constructor(timer) {
    this.timer = document.getElementById(timer);
    this.init();
  }

  init() {
    const interval = setInterval(() => {
      this.countDown();
      if (parseInt(this.timer.textContent) === 0) {
        clearInterval(interval);
        setTimeout(() => alert("Вы победили в конкурсе"), 0);
      }
    }, 1000);
  }

  countDown() {
    this.timer.textContent -= 1;
  }
}

const Counter = new Timer("timer");
