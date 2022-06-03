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


window.addEventListener('load', randomPalette)
randomButton.addEventListener('click', randomPalette)
function randomPalette() {
  var freshPalette = new Palette()
  console.log(freshPalette)
  label1.innerText = freshPalette.colors[0].color
  label2.innerText = freshPalette.colors[1].color
  label3.innerText = freshPalette.colors[2].color
  label4.innerText = freshPalette.colors[3].color
  label5.innerText = freshPalette.colors[4].color
  swatch1.style.backgroundColor = freshPalette.colors[0].color
  swatch2.style.backgroundColor = freshPalette.colors[1].color
  swatch3.style.backgroundColor = freshPalette.colors[2].color
  swatch4.style.backgroundColor = freshPalette.colors[3].color
  swatch5.style.backgroundColor = freshPalette.colors[4].color
  


}

