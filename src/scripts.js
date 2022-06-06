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
// var deleteMinis = document.querySelectorAll('#mini-hex-container')


// EVENT LISTENERS 
window.addEventListener('keypress', spacebar)
window.addEventListener('load', makeNewPalette)
randomButton.addEventListener('click', refreshPalette)
savedButton.addEventListener('click', savePalette)
swatchContainer.addEventListener('click', changeLockedValue)
hideButton.addEventListener('click', hideSaved)
// savedSection.addEventListener('click', deletePal)
// deleteMinis.addEventListener('click', deletePal)


function changeLockedValue(event) {
  var lockID = event.target.id
  for (var i = 0; i < freshPalette.colors.length; i++) {
    if (freshPalette.colors[i].color === lockID) {
      if (freshPalette.colors[i].locked === true) {
        freshPalette.colors[i].locked = false
        // locks[i].src = "./assets/SVG/open.svg"
      } else {
        freshPalette.colors[i].locked = true
        // locks[i].src = "./assets/SVG/clsd.svg"
      }
    }
  }
}
function deletePal(eventHex) {
// elem.parentNode.removeChild(elem);
  
  var miniSection = eventHex.currentTarget
  var newId = miniSection.dataset.id
  for (var i = 0; i < freshPalette.length; i++) {
    if (freshPalette.target.id == newId) {
      freshPalette.splice(i, 1);
    }
  }
    miniSection.remove()
  }

function refreshPalette() {
  newid = `${Date.now()}`
  for (var i = 0; i < freshPalette.colors.length; i++) {
    if (!freshPalette.colors[i].locked) {
      freshPalette.colors[i] = new Color()
      freshPalette.id = newid
      // console.log(freshPalette.id)
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
  if (!savedPalettes.includes(freshPalette.id) && savedPalettes.length < 8) {
    savedPalettes.push(freshPalette.id)
    addToSaved()
  }
  if (savedPalettes.length === 8) {
    show(error)
  }
}


function addToSaved() {
  
  var miniSwatch = document.createElement('figure');
  miniSwatch.classList.add('mini-hex-container');
  miniSwatch.setAttribute('id', `${freshPalette.id}`);
  for (var i = 0; i < freshPalette.length; i++) {
    miniSwatch.innerHTML = `<div class="mini-hex mini-hex1"   style="background: ${freshPalette.colors[0].color};"></div>
  <div class="mini-hex mini-hex2" style="background:${freshPalette.colors[1].color};"></div>
  <div class="mini-hex mini-hex3" style="background:${freshPalette.colors[2].color};"></div>
  <div class="mini-hex mini-hex4" style="background:${freshPalette.colors[3].color};"></div>
  <div class="mini-hex mini-hex5" style="background:${freshPalette.colors[4].color};"></div>
  <div class="tcan"> <img class="mini-hex" id="${freshPalette.id}" src="./assets/SVG/trash-can.svg" alt="t-can"></div>`;
    savedSection.appendChild(miniSwatch);
    console.log(`1`, addToSaved)

    
  }
  var savedHexes = document.querySelectorAll(".mini-hex-container");
  for (var i = 0; i < savedHexes.length; i++) {
    savedHexes[i].addEventListener('click', deletePal);
    
  }

}

 



// function displayPalettes() {
//   savedSection.innerHTML =``
      
// }





function show(element) {
  element.classList.remove('hidden')
}

function hide(element) {
  element.classList.add('hidden')
}

function hideSaved() {
  hide(savedSection)
}

function spacebar(key) {
  if (key.keyCode === 32) {
    makeNewPalette()
  }
}