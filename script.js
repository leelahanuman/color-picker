let bgContainer = document.getElementById("colorPickerContainer");
let BackgroundColor = document.getElementById("selectedColorHexCode");

function buttonA() {
    bgContainer.style.backgroundColor = "#e0e0e0";
    BackgroundColor.textContent = "#e0e0e0";
}

function buttonB() {
    bgContainer.style.backgroundColor = "#6fcf97";
    BackgroundColor.textContent = "#6fcf97";
}

function buttonC() {
    bgContainer.style.backgroundColor = "#56ccf2";
    BackgroundColor.textContent = "#56ccf2";
}

function buttonD() {
    bgContainer.style.backgroundColor = "#bb6bd9";
    BackgroundColor.textContent = "#bb6bd9";
}
