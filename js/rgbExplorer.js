//Hexadecimcal Function
function hex(x) {
    x = Number(x);
    var hexDigits = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "a", "b", "c", "d", "e", "f"
    ];
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

function renderView(id, val) {
    //Get Values from inputs
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;

    //Render View
    document.getElementById("render_red").setAttribute(
        "style", "background-color: " + "rgb(" + red + ", 0, 0)");
    document.getElementById("render_green").setAttribute(
        "style", "background-color: " + "rgb(0, " + green + ", 0)");
    document.getElementById("render_blue").setAttribute(
        "style", "background-color: " + "rgb(0, 0, " + blue + ")");

    let hexVal = document.getElementsByClassName("hexcode_" + id);
    hexVal[0].innerText = hex(val);
}

//Sliders Range Event Listener
let sliders = document.querySelectorAll("input[type=range]");
for (let i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener("input", function () {
        let id = this.id;
        let val = this.value;

        // Update Number Input with it's respective Sliders Range Input value
        let inputNumber = document.getElementsByClassName(id);
        inputNumber[0].value = val;
        renderView(id, val);
    }, false);
}

//Number Input Event Lister
let numberInput = document.querySelectorAll("input[type=number]");
for (let i = 0; i < numberInput.length; i++) {
    numberInput[i].addEventListener("input", function () {

        let id = this.getAttribute('class');
        let val = this.value;

        // Update Sliders Range Input with it's respective Number Input value
        let inputSlider = document.getElementById(id);
        inputSlider.value = val;
        renderView(id, val);
    }, false);
}
