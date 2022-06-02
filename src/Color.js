class Color {
    constructor() {

      this.color = this.genColor();
      this.locked =false;
    }
    genColor(){
      var hexId = ``;
      var combos = `abcdef0123456789`;
      for(var i = 0; i < 6; i++){
      hexId += combos.charAt(Math.floor(Math.random() * combos.length));
    }
      return `#${hexId}`
  }
};

  module.exports = Color;
