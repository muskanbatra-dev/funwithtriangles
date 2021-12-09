const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

sides.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputEl.textContent = "The length of Hypotenuse is " + lengthOfHypotenuse
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);