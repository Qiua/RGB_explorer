//Hexadecimcal Function
var hexCode = ["#", "00", "00", "00"];

function hex(x) {
    "use strict";
    var hexPair = Number(x);
    var hexDigits = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "a", "b", "c", "d", "e", "f"
    ];
    return Number.isNaN(hexPair)
    ? "00"
    : hexDigits[(hexPair - hexPair % 16) / 16] + hexDigits[hexPair % 16];
}

function renderView() {
    "use strict";
    //Get Values from inputs
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;

    //Render View
    document.getElementById("render_red").setAttribute(
        "style",
        "background-color: " + "rgb(" + red + ", 0, 0)"
    );
    document.getElementById("render_green").setAttribute(
        "style",
        "background-color: " + "rgb(0, " + green + ", 0)"
    );
    document.getElementById("render_blue").setAttribute(
        "style",
        "background-color: " + "rgb(0, 0, " + blue + ")"
    );

    var hexCodeEl = document.getElementById("hexCode");

    hexCode[1] = hex(red);
    hexCode[2] = hex(green);
    hexCode[3] = hex(blue);

    hexCodeEl.innerText = hexCode.join("").toUpperCase();
}

//Sliders Range Event Listener
function updateRangeInputValue() {
    "use strict";
    var id = this.id;
    var val = this.value;

    // Update Number Input with it's respective Sliders Range Input value
    var inputNumber = document.getElementsByClassName(id);
    inputNumber[0].value = val;
    renderView();
}
function rangeEvents() {
    "use strict";
    const SLIDERS = document.querySelectorAll("input[type=range]");
    var i = 0;
    while (i < SLIDERS.length) {
        SLIDERS[i]
        .addEventListener("input", updateRangeInputValue, false);
        i += 1;
    }
}


//Number Input Event Lister
function updateNumberInputValue() {
    "use strict";
    var id = this.getAttribute("class");
    var val = this.value;

    // Update Sliders Range Input with it's respective Number Input value
    var inputSlider = document.getElementById(id);
    inputSlider.value = val;
    renderView();
}
function numberEvents() {
    "use strict";
    const NUMBERS = document.querySelectorAll("input[type=number]");
    var i = 0;
    while (i < NUMBERS.length) {
        NUMBERS[i]
        .addEventListener("input", updateNumberInputValue, false);
        i += 1;
    }
}

rangeEvents();
numberEvents();
