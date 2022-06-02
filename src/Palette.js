var Color = require("./Color")

var generatedPalette = [new Color(),
new Color(),
new Color(),
new Color(),
new Color(),
new Color(),]

class Palette {
    constructor(generatedPalette) {
      this.colors = [new Color(), new Color(), new Color(), new Color(), new Color(),];
      this.id = Date.now();
    }

  }
}

    //   module.exports = Palette

    // create a class with the name of Color, and properties of a randonm hex code color, also a lock key of false.

    // we will need to access the property of this.color and this.locked within the Color class. we will also need to access the final value of a generated hex code. we will get the properties of the Color class by dot notation(Color.color and Color.locked)

    //this class will need a constructor, May need parameters, may need a function/method that will return a random hex code or number back to this.color
    //will eventually need to create a function/method to change the boolean value of this.locked
    //will need to create a new instance of Color when ever a user clicks randomize as well as on page "load"
