class Clicker {
  constructor(count, image) {
    this.count = document.getElementById(count);
    this.image = document
      .getElementById(image)
      .addEventListener("click", (e) => this.incrementCount(e));
    this.initialCount = 0;
  }

  incrementCount(e) {
    this.count.textContent = ++this.initialCount;
    e.target.classList.toggle("checksize");
  }
}

const Cookie = new Clicker("clicker__counter", "cookie");
