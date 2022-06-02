
class Color {
  constructor() {
    this.color = '#ffffff';
    this.locked =false;
  }
  genColor(){
    var hexId = ``;
    var combos = `abcdef0123456789`;
    for(var i = 0; i < 6; i++){
    hexId += combos.charAt(Math.floor(Math.random() * combos.length));
    this.color = `#${hexId}`
}
};

module.exports = Color


class Palette {
  constructor() {
    this.colors = [];
    this.id = Date.now();