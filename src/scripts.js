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
var miniHex1 =document.querySelector('.mini-hex1')
var miniHex2 =document.querySelector('.mini-hex2')
var miniHex3 =document.querySelector('.mini-hex3')
var miniHex4 =document.querySelector('.mini-hex4')
var miniHex5 =document.querySelector('.mini-hex5')


window.addEventListener('load', makeNewPalette)
randomButton.addEventListener('click', makeNewPalette)
savedButton.addEventListener('click', savePalette)

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
}

function genColor(){
    var hexId = ``;
    var combos = `abcdef0123456789`;
    for(var i = 0; i < 6; i++){
    hexId += combos.charAt(Math.floor(Math.random() * combos.length));
  }
    return `#${hexId}`
}



function displaySaved() {
    savedSection.classList.remove('hidden')
    miniHex1.style.backgroundColor = savedPalettes[0].colors[0].color
    miniHex2.style.backgroundColor = savedPalettes[0].colors[1].color
    miniHex3.style.backgroundColor = savedPalettes[0].colors[2].color
    miniHex4.style.backgroundColor = savedPalettes[0].colors[3].color
    miniHex5.style.backgroundColor = savedPalettes[0].colors[4].color
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