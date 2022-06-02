var saveButton = document.querySelector(".save-button")

saveButton.addEventListener('click', genColor)

    function genColor(){
        var hexId = ``;
        var combos = `abcdef0123456789`;
        for(var i = 0; i < 6; i++){
        hexId += combos.charAt(Math.floor(Math.random() * combos.length));
    }
    var newColor = `#${hexId}`
    addToPalette()
    }

    function addToPalette() {
        console.log(newColor)
   
    }