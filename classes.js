
var newId = document.querySelector("#swatch-1")


class Color {
  constructor(hexId) {
    this.color = genColor();
    this.locked =false;
  }

   genColor(combos){
    var hexId = ``;
    var combos = `abcdef0123456789`;
  for(var i = 0; i < 6; i++)
    hexId += combos.charAt(Math.floor(Math.random() * combos.length));
  return newId = `#${hexId}`;
  }
};


class Palette {
  constructor() {
    this.colors = [];
    this.id = Date.now();
  }

}
