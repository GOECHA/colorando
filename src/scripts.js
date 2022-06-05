var savedPalettes = [];
var freshPalette;

// var allHexCodes = document.querySelectorAll('.hex-code');
var allSwatches = document.querySelectorAll('.swatch');

var randomButton = document.querySelector('#random')
var savedButton = document.querySelector('#save')
var swatchContainer = document.querySelector('.swatch-container')
var savedSection = document.querySelector('.saved-palettes')
var hidePalettes = document.querySelector('#hide-palettes')
var savedSection = document.querySelector('.saved-palettes')
var locks = document.querySelectorAll('.locks') 
var error = document.querySelectorAll('.error')
var lockContainer = document.querySelector('.lock-container')
// var lockOpen = document.querySelectorAll('#lock-open')
// var lockClosed = document.querySelectorAll('#lock-closed')


window.addEventListener('keypress', spacebar)
window.addEventListener('load', makeNewPalette)
randomButton.addEventListener('click', checkValue)
savedButton.addEventListener('click', savePalette)
swatchContainer.addEventListener('click', lock)

// hidePalettes.addEventListener('click', savedSection)


function spacebar(key){
  if(key.keyCode === 32){
    makeNewPalette()
  }
}




function lock(event){
  var lockID = event.target.id
  console.log(event.target.id)
  console.log(freshPalette)
  for (var i = 0; i < freshPalette.colors.length; i++) {
      if(freshPalette.colors[i].locked === true) {
        freshPalette.colors[i].locked = false  
        locks[i].src="./assets/SVG/open.svg"
        console.log(freshPalette.colors[i], lockID)
      } else {
        freshPalette.colors[i].locked = true 
        locks[i].src="./assets/SVG/clsd.svg"
        console.log(freshPalette.colors[i], lockID)
        
      }
    }
  
}
  






// 
// 

//when clicked the boolean value of the swatch entirely turns to true
//iterate through each index of the palette to check its value
//if the index value is true, do nothing, dont generate, dont display
//if the value is still false replace, generate, display
function checkValue(){
for (var i = 0; i < freshPalette.colors.length; i++){
  if(!freshPalette.colors[i].locked) {
    freshPalette.colors[i] = new Color()
  }
}
display()
}


function makeNewPalette() {
    freshPalette = new Palette()
    console.log(freshPalette);
    display()
  }


  function display() {
    for (var i = 0; i < freshPalette.colors.length; i++) {
      // allHexCodes[i].innerText = freshPalette.colors[i].color
      locks[i].id = freshPalette.colors[i].color
      allSwatches[i].style.backgroundColor = freshPalette.colors[i].color;
      allSwatches[i].innerText = freshPalette.colors[i].color;
      allSwatches[i].id = freshPalette.colors[i].color;  
      // console.log(freshPalette)
    }
  }


  function genColor(){
    var hexId = "";
    var combos = `abcdef0123456789`;
    for(var i = 0; i < 6; i++){
    hexId += combos.charAt(Math.floor(Math.random() * combos.length));
  }
    return `#${hexId}`
}

function savePalette() {
  savedSection.classList.remove('hidden')
    if (!savedPalettes.includes(freshPalette) && savedPalettes.length < 8){
        savedPalettes.push(freshPalette)
        addToSaved()
    } 
    }

function addToSaved () {
  var miniSwatch = document.createElement('figure')
  miniSwatch.classList.add('mini-hex-container')
  miniSwatch.setAttribute('id',`${freshPalette.id}`)
  miniSwatch.innerHTML = `<div class="mini-hex mini-hex1" style="background: ${freshPalette.colors[0].color};"></div>
  <div class="mini-hex mini-hex2" style="background:${freshPalette.colors[1].color};"></div>
  <div class="mini-hex mini-hex3" style="background:${freshPalette.colors[2].color};"></div>
  <div class="mini-hex mini-hex4" style="background:${freshPalette.colors[3].color};"></div>
  <div class="mini-hex mini-hex5" style="background:${freshPalette.colors[4].color};"></div>
  <img class="mini-hex" id="t-can" src="./assets/SVG/trash-can.svg" alt="t-can">`
  savedSection.appendChild(miniSwatch)
}




// function show(element){
//   var element = element.classList.remove.hidden
//   return element
// }

// function hide(element){
//   var element = element.classList.add.hidden
//   return element
//   }