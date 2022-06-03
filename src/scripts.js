var savedPalettes = []
var freshPalette;




var label1 = document.querySelector('#hex-code-1')
var label2 = document.querySelector('#hex-code-2')
var label3 = document.querySelector('#hex-code-3')
var label4 = document.querySelector('#hex-code-4')
var label5 = document.querySelector('#hex-code-5')
var swatch1 = document.querySelector('#swatch-1')
var swatch2 = document.querySelector('#swatch-2')
var swatch3 = document.querySelector('#swatch-3')
var swatch4 = document.querySelector('#swatch-4')
var swatch5 = document.querySelector('#swatch-5')
var lock = document.querySelector('.locks')
// var lock2 = document.querySelector('#lock-2')
// var lock3 = document.querySelector('#lock-3')
// var lock4 = document.querySelector('#lock-4')
// var lock5 = document.querySelector('#lock-5')
var randomButton = document.querySelector('#random')
var savedButton = document.querySelector('#save')
var swatchContainer = document.querySelector('.swatch')

window.addEventListener('load', loadNewPalette)
randomButton.addEventListener('click', randomPalette)
savedButton.addEventListener('click', savePalette)





// lock.addEventListener('click', changeLock)

// function changeLock() {
//     if(lock.classList.) {
//     lock.classList.toggle('hidden')
//     }
// }
// function test(element){
// element.classList.toggle('hidden')
// }
function loadNewPalette(freshPalette) {

// for (var i = 0; i < freshPalette.colors.length; i++) {
// swatchContainer[i].style.backgroundColor = freshPalette.colors[i].color;
// }
  label1.innerText =  genColor(this.colors)
  label2.innerText =  genColor(this.colors)
  label3.innerText =  genColor(this.colors)
  label4.innerText =  genColor(this.colors)
  label5.innerText =  genColor(this.colors)
  swatch1.style.backgroundColor = genColor(this.colors)
  swatch2.style.backgroundColor = genColor(this.colors)
  swatch3.style.backgroundColor = genColor(this.colors)
  swatch4.style.backgroundColor = genColor(this.colors)
  swatch5.style.backgroundColor = genColor(this.colors)
  freshPalette = new Palette(this.colors[this.pushToPalette()])
  return freshPalette
}

function savePalette() {
    savedPalettes.push(freshPalette)
    console.log(savedPalettes)

}

function randomPalette() {
loadNewPalette()
}


function show(element) {
    element.classList.toggle('hidden')
}
function hide(element) {
    element.classList.add('hidden')
}
function toggleHiddenClass(element) {
    element.classList.toggle('hidden')
}

function genColor(){
    var hexId = ``;
    var combos = `abcdef0123456789`;
    for(var i = 0; i < 6; i++){
    hexId += combos.charAt(Math.floor(Math.random() * combos.length));
  }
    return `#${hexId}`
}