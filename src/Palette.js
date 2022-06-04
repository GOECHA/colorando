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

    toggleLockedSwatch() {
      if (this.newPalette[i].locked === true) {
        this.newPalette[i].locked = false
      } else if (this.newPalette[i].locked === false) {
        this.newPalette[i].locked = true
      }
    }

  //   replaceUnlocked() {
  //     for (var i = 0; i < 5; i ++) {
  //       if (!this.colors[i].locked) {
  //         this.colors.splice(i, 1, new Color())
  //       }
  //     }
  // }
}
