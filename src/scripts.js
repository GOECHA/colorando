// Global variables
var savedPalettes = [];
var freshPalette;
var allSwatches = document.querySelectorAll('.swatch');
var randomButton = document.querySelector('#random')
var savedButton = document.querySelector('#save')
var swatchContainer = document.querySelector('.swatch-container')
var savedSection = document.querySelector('.saved-palettes')
var locks = document.querySelector('.locks')
var error = document.querySelector('.error')
var hideButton = document.querySelector('.hide-palettes')
var miniContainer = document.querySelectorAll('.mini-hex-container')
var test = document.querySelector('#target')



// EVENT LISTENERS 
window.addEventListener('keypress', spacebar)
window.addEventListener('load', makeNewPalette)
randomButton.addEventListener('click', refreshPalette)
savedButton.addEventListener('click', savePalette)
swatchContainer.addEventListener('click', changeLockedValue)
hideButton.addEventListener('click', hideSaved)




function changeLockedValue(event) {
  lockID = event.target.id;
  for (var i = 0; i < freshPalette.colors.length; i++) {
    if (freshPalette.colors[i].color === lockID) {
      freshPalette.colors[i].locked = !freshPalette.colors[i].locked;
    }
  }
}

function refreshPalette() {
  for (var i = 0; i < freshPalette.colors.length; i++) {
    if (!freshPalette.colors[i].locked) {
      freshPalette.colors[i] = new Color()
      console.log(freshPalette.id)
    }
  }
  display()
}

function makeNewPalette() {
  freshPalette = new Palette()
  display()
}


function display() {
  for (var i = 0; i < freshPalette.colors.length; i++) {
    allSwatches[i].style.backgroundColor = freshPalette.colors[i].color;
    allSwatches[i].innerText = freshPalette.colors[i].color;
    allSwatches[i].id = freshPalette.colors[i].color
  }
}

function genColor() {
  var hexId = "";
  var combos = `abcdef0123456789`;
  for (var i = 0; i < 6; i++) {
    hexId += combos.charAt(Math.floor(Math.random() * combos.length));
  }
  return `#${hexId}`
}

function savePalette() {
  show(savedSection)
  show(hideButton)
  if (savedPalettes.length < 8) {
    savedPalettes.push(freshPalette)
    addToSaved()
  }
  if (savedPalettes.length === 8) {
    show(error)
  }
}

function addToSaved() {
  miniSwatch = document.createElement('figure');
  miniSwatch.classList.add('mini-hex-container');
  miniSwatch.setAttribute('id', `target`);
  for (var i = 0; i < savedPalettes.length; i++)
    miniSwatch.innerHTML = `<div class="mini-hex mini-hex1" style="background: ${savedPalettes[i].colors[0].color};"></div>
  <div class="mini-hex mini-hex2" style="background:${savedPalettes[i].colors[1].color};"></div>
  <div class="mini-hex mini-hex3" style="background:${savedPalettes[i].colors[2].color};"></div>
  <div class="mini-hex mini-hex4" style="background:${savedPalettes[i].colors[3].color};"></div>
  <div class="mini-hex mini-hex5" style="background:${savedPalettes[i].colors[4].color};"></div>
  <div class="tcan"> <img class="mini-hex" src="./assets/SVG/trash-can.svg" alt="t-can"></div>`;
  savedSection.appendChild(miniSwatch);
  trashcan = document.querySelector('.tcan')
  trashcan.addEventListener('click', deletePal)

}
// function addToSaved() {
//   var newMini = '';
//   for (var i = 0; i < savedPalettes.length; i++) {
//     newMini = newMini + `<div class="mini-hex mini-hex1" style="background: ${savedPalettes[i].colors[0].color};"></div>
// //   <div class="mini-hex mini-hex2" style="background:${savedPalettes[i].colors[1].color};"></div>
// //   <div class="mini-hex mini-hex3" style="background:${savedPalettes[i].colors[2].color};"></div>
// //   <div class="mini-hex mini-hex4" style="background:${savedPalettes[i].colors[3].color};"></div>
// //   <div class="mini-hex mini-hex5" style="background:${savedPalettes[i].colors[4].color};"></div>
// //   <div class="tcan"> <img class="mini-hex" src="./assets/SVG/trash-can.svg" alt="t-can"></div>`;
//   }
//   //   savedSection.appendChild(miniSwatch);
//   //   var trashcan = document.querySelector('.tcan')
//   //   trashcan.addEventListener('click', deletePal)


//   miniContainer.innerHTML = newMini;

// }
function deletePal() {
  for (var i = 0; i < savedPalettes.length; i++) {
     miniSwatch.innerHTML = ``
    if (miniSwatch.id == `target`) {
      savedPalettes.splice(i, 1);
    }
  }
}




function show(element) {
  element.classList.remove('hidden')
}

function hide(element) {
  element.classList.add('hidden')
}

function hideSaved() {
  hide(savedSection)
   hide(hideButton)
}

function spacebar(key) {
  if (key.keyCode === 32) {
    makeNewPalette()
  }
}