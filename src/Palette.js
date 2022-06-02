var Color = require("./Color")

class Palette {
    constructor() {
      this.colors = [];
      this.id = Date.now();
    }
     addToPalette() {
      var color = new Color.genColor()
      if (this.colors < 5) {
    this.colors.push(color)
  
      }
}

    //   module.exports = Palette