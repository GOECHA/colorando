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


      replaceUnlocked() {
      for (var i = 0; i < freshPalette.length; i ++) {
        if (!this.colors[i].locked) {
          this.colors.splice(i, 1, new Color())
        }
      }
  }

  // toggleLock(){
  //   if (!this.colors.locked){
  //    this.colors.locked = true;
  //   } 
  //   else {
  //    this.colors.locked = false;
  //   }
  // }
  
  };
  

