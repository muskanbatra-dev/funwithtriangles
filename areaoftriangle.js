const measurment = document.querySelectorAll(".measurment-input");
const checkAreaBtn = document.querySelector("#check-area-btn");
const outputEl = document.querySelector("#output");

measurment.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}

function calculateMulOf(a, b) {
    const square = a * b;
    return square;
}

function calculateArea() {
    const square = calculateMulOf(Number(measurment[0].value), Number(measurment[1].value));
    const finalArea = square / 2;
    outputEl.textContent = "The Area is " + finalArea
}

checkAreaBtn.addEventListener("click", calculateArea);