class Palette {
  constructor(trash) {
    this.colors = this.pushToPalette();
    this.id = Date.now();
    this.trash = [];
  }

  pushToPalette() {
    var newPalette = [];
    for (var i = 0; i < 5; i++) {

      newPalette.push(new Color());
    }
    return newPalette;
  }

 
}


