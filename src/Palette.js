class Palette {
  constructor() {
    this.colors = this.pushToPalette();
    this.id = Date.now();
  }
  pushToPalette() {
    var newPalette = [];
    for (var i = 0; i < 5; i++) {
      newPalette.push(new Color());
    }
    return newPalette;
  }
}