class Palette {
    constructor() {
      this.colors = this.pushToPalette()
      this.id = Date.now();
    }

    pushToPalette(){
      var newPalette = []
      for (var i = 0; i < 5; i ++) {
        newPalette.push(new Color())
      }
      return newPalette
    }
  // toggleLockedSwatch() {
  //   for (var i = 0; i < this.colors.length; i ++) {
  //     if (onclick.Event.currentTarget[i].locked === true) {
  //       this.newPalette[i].locked = false
  //     } else if (this.newPalette[i].locked === false) {
  //       this.newPalette[i].locked = true
      // }
    }
  

