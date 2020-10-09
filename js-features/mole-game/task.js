class GameOn {
  constructor(game, hit, miss) {
    this.holes = document
      .querySelector(game)
      .addEventListener("click", (e) => this.handleClick(e));
    this.hit = document.getElementById(hit);
    this.miss = document.getElementById(miss);
    this.count = 0;
    this.missCount = 0;
  }

  handleClick({target}) {
    if (target.classList.contains("hole_has-mole")) {
      ++this.count;
      this.handleCount();
    } else {
      ++this.missCount;
      this.handleCount();
    }
  }

  handleCount() {
    this.hit.textContent = this.count;
    this.miss.textContent = this.missCount;
    this.handleWin()
  }

  handleWin = () => {
    if (this.count > 4 && this.missCount < 5) {
      alert("Вы победили!");
      this.handleReset();
    } else if (this.missCount > 4) {
      alert("Вы проиграли");
      this.handleReset();
    }
  };

  handleReset() {
    this.count = 0;
    this.missCount = 0;
    this.handleCount();
  }
}

const Game = new GameOn(".hole-game", "dead", "lost");

