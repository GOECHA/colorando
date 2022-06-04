var savedPalettes = [];
var freshPalette;

var allHexCodes = document.querySelectorAll('.hex-code');
var allSwatches = document.querySelectorAll('.swatch');

var randomButton = document.querySelector('#random')
var savedButton = document.querySelector('#save')
var swatchContainer = document.querySelector('.swatch-container')
var savedSection = document.querySelector('.saved-palettes')
var hidePalettes = document.querySelector('#hide-palettes')
var savedSection = document.querySelector('.saved-palettes')
var locks = document.querySelectorAll('.locks')


window.addEventListener('load', makeNewPalette)
randomButton.addEventListener('click', makeNewPalette)
savedButton.addEventListener('click', savePalette)
swatchContainer.addEventListener('click', lockColor)
// hidePalettes.addEventListener('click', savedSection)



function lockColor(e) {
  console.log(e.target)

  for (var i = 0; i < freshPalette.colors.length)
  // lockHex.currentTarget
// var hexId = swatches.dataset.id //not id, but an element within this.colors 
  
// for (var i = 0; i < freshPalette.colors.length; i ++){
//    if (freshPalette[i].id == hexId){
//      locks.classList.add('hidden')
//    }
// } 
// console.log(`1`, swatches)


}



function makeNewPalette() {
    freshPalette = new Palette();
    for (var i = 0; i < freshPalette.colors.length; i++) {
      allHexCodes[i].innerText = freshPalette.colors[i].color
      allSwatches[i].style.backgroundColor = freshPalette.colors[i].color;
    }locks.id = hexId
}

function savePalette() {
    savedSection.classList.remove('hidden')
    if(!savedPalettes.includes(freshPalette) && savedPalettes.length < 8){
        savedPalettes.push(freshPalette)
        console.log(savedPalettes)
        append()
        makeNewPalette()
    }   
}

function append () {
  var testing = document.createElement('figure')
  testing.classList.add('mini-hex-container')
  testing.lockColor('id',`${freshPalette.id}`)
  testing.innerHTML = `<div class="mini-hex mini-hex1" style="background: ${freshPalette.colors[0].color};"></div>
  <div class="mini-hex mini-hex2" style="background:${freshPalette.colors[1].color};"></div>
  <div class="mini-hex mini-hex3" style="background:${freshPalette.colors[2].color};"></div>
  <div class="mini-hex mini-hex4" style="background:${freshPalette.colors[3].color};"></div>
  <div class="mini-hex mini-hex5" style="background:${freshPalette.colors[4].color};"></div>
  <img class="mini-hex" id="t-can" src="./assets/SVG/trash-can.svg" alt="t-can">`
  savedSection.appendChild(testing)
}




function genColor(){
    var hexId = "";
    var combos = `abcdef0123456789`;
    for(var i = 0; i < 6; i++){
    hexId += combos.charAt(Math.floor(Math.random() * combos.length));
  }
    return `#${hexId}`
}


// function show(element){
// element.classList.remove.("hidden")
// }

// function hide(element){
//   element.classList.add.("hidden")
//   }