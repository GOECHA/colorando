var savedPalettes = [];
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
var randomButton = document.querySelector('#random')
var savedButton = document.querySelector('#save')
var swatchContainer = document.querySelector('.swatch-container')
var savedSection = document.querySelector('.saved-palettes')
var miniHex1 = document.querySelector('.mini-hex1')
var miniHex2 = document.querySelector('.mini-hex2')
var miniHex3 = document.querySelector('.mini-hex3')
var miniHex4 = document.querySelector('.mini-hex4')
var miniHex5 = document.querySelector('.mini-hex5')
var lock1 = document.querySelector('#locked-1')
var unlock1 = document.querySelector('#unlocked-1')
var lock2 = document.querySelector('#locked-2')
var unlock2 = document.querySelector('#unlocked-2')
var lock3 = document.querySelector('#locked-3')
var unlock3 = document.querySelector('#unlocked-3')
var lock4 = document.querySelector('#locked-4')
var unlock4 = document.querySelector('#unlocked-4')
var lock5 = document.querySelector('#locked-5')
var unlock5 = document.querySelector('#unlocked-5')
var lock1Container = document.querySelector('#lock-1')
var lock2Container = document.querySelector('#lock-2')
var lock3Container = document.querySelector('#lock-3')
var lock4Container = document.querySelector('#lock-4')
var lock5Container = document.querySelector('#lock-5')
var hidePalettes = document.querySelector('#hide-palettes')
var savedSection = document.querySelector('.saved-palettes')


window.addEventListener('load', makeNewPalette)
randomButton.addEventListener('click', makeNewPalette)
savedButton.addEventListener('click', savePalette)
// hidePalettes.addEventListener('click', hideSavedPalettes)
lock1Container.addEventListener('click', lockUnlock1)
lock2Container.addEventListener('click', lockUnlock2)
lock3Container.addEventListener('click', lockUnlock3)
lock4Container.addEventListener('click', lockUnlock4)
lock5Container.addEventListener('click', lockUnlock5)
// unlock1.addEventListener('click', lockUnlock)

function lockUnlock1(){
  lock1.classList.toggle('hidden');
  unlock1.classList.toggle('hidden');
}
function lockUnlock2(){
  lock2.classList.toggle('hidden')
  unlock2.classList.toggle('hidden')
}
function lockUnlock3(){
  lock3.classList.toggle('hidden')
  unlock3.classList.toggle('hidden')
}
function lockUnlock4(){
  lock4.classList.toggle('hidden')
  unlock4.classList.toggle('hidden')
}
function lockUnlock5(){
  lock5.classList.toggle('hidden')
  unlock5.classList.toggle('hidden')
}



function makeNewPalette() {
    freshPalette = new Palette();
//  for (var i = 0; i < freshPalette.colours.length; i++) {
// swatchContainer[i].style.backgroundColor = freshPalette.colors[i].color;
// }
  swatch1.style.backgroundColor = freshPalette.colors[0].color,
  swatch2.style.backgroundColor = freshPalette.colors[1].color,
  swatch3.style.backgroundColor = freshPalette.colors[2].color,
  swatch4.style.backgroundColor = freshPalette.colors[3].color,
  swatch5.style.backgroundColor = freshPalette.colors[4].color,
  label1.innerText = freshPalette.colors[0].color
  label2.innerText = freshPalette.colors[1].color
  label3.innerText = freshPalette.colors[2].color
  label4.innerText = freshPalette.colors[3].color
  label5.innerText = freshPalette.colors[4].color
}

function savePalette() {
    if(!savedPalettes.includes(freshPalette)){
        savedPalettes.push(freshPalette)
        console.log(savedPalettes)
    }
    makeNewPalette()
    displaySaved()
    append()
}
function append () {
  var testing = document.createElement('figure')
  testing.classList.add('mini-hex-container')
  testing.setAttribute('id',`${freshPalette.id}`)
  testing.innerHTML = `<div class="mini-hex mini-hex1" style="background: ${freshPalette.colors[0].color};"></div>
  <div class="mini-hex mini-hex2" style="background:${freshPalette.colors[1].color};"></div>
  <div class="mini-hex mini-hex3" style="background:${freshPalette.colors[2].color};"></div>
  <div class="mini-hex mini-hex4" style="background:${freshPalette.colors[3].color};"></div>
  <div class="mini-hex mini-hex5" style="background:${freshPalette.colors[4].color};"></div>
  <img class="mini-hex" id="t-can" src="./assets/SVG/trash-can.svg" alt="t-can">`
  savedSection.appendChild(testing)
  displaySaved()
}


function displaySaved() {
  savedSection.classList.remove('hidden')
  miniHex1.style.backgroundColor = savedPalettes[0].colors[0].color
  miniHex2.style.backgroundColor = savedPalettes[0].colors[1].color
  miniHex3.style.backgroundColor = savedPalettes[0].colors[2].color
  miniHex4.style.backgroundColor = savedPalettes[0].colors[3].color
  miniHex5.style.backgroundColor = savedPalettes[0].colors[4].color
}






function genColor(){
    var hexId = "";
    var combos = `abcdef0123456789`;
    for(var i = 0; i < 6; i++){
    hexId += combos.charAt(Math.floor(Math.random() * combos.length));
  }
    return `#${hexId}`
}




function hideSavedPalettes(){
  savedSection.classList.add('hidden')
}




    // var freshPalette = ''
    // for (var i = 0; i < savedPalettes.length; i ++){
    //     freshPalette = freshPalette + `<section class="mini-hex" background="${freshPalette[i].colors.color}"`
    // }
    // console.log(freshPalette)





// function showSaveCovers() {
//     displaySavedCovers();
//     var smallCover = '';
//     for (var i = 0; i < savedCovers.length; i++) {
//       smallCover = smallCover + `<section class="mini-cover" data-id="${savedCovers[i].id}">
//           <img class="overlay" src="./assets/overlay.png">
//           <img class="cover-image" src="${savedCovers[i].cover}">
//           <h2 class="cover-title">${savedCovers[i].title}</h2>
//           <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}
//           </span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
//         </section>`
//     };
//     saveCoverSection.innerHTML = smallCover;

//     var allSavedCovers = document.querySelectorAll('.mini-cover');

//     for (var i = 0; i < allSavedCovers.length; i++) {
//       allSavedCovers[i].addEventListener('dblclick', deleteCover)
//     }
//   };

// lock.addEventListener('click', changeLock)

// function changeLock() {
//     if(lock.classList.) {
//     lock.classList.toggle('hidden')
//     }
// }
// function test(element){
// element.classList.toggle('hidden')
// }

// for (var i = 0; i < freshPalette.colors.length; i++) {
// swatchContainer[i].style.backgroundColor = freshPalette.colors[i].color;
// }

// function show(element) {
//     element.classList.toggle('hidden')
// }
// function hide(element) {
//     element.classList.add('hidden')
// }
// function toggleHiddenClass(element) {
//     element.classList.toggle('hidden')
// }
