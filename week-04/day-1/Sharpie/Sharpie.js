class Sharpie {

  constructor(color, width) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  }

  use() {
    while (this.inkAmount > 0 && this.inkAmount > this.width) {
      this.inkAmount -= this.width;
      console.log(this.inkAmount);
    }
  }
}

const shap = new Sharpie('red', 16);
shap.use();
