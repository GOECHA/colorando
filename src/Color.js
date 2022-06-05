class Color {
    constructor(gencolor, lock) {
      this.color = genColor();
      this.locked = false;
    }
    toggleLock(){
      if (!this.locked){
       this.locked = true;
      } 
      else {
       this.locked = false;
      }
    }
}
