const sides = document.querySelectorAll(".side-input");
const hypotnuseBtn = document.querySelector("#hypotnuse-btn");
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

function calculateHypotnuse() {
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotnuse = Math.sqrt(sumOfSquares);
    outputEl.textContent = "The length of Hypotnuse is " + lengthOfHypotnuse
}

hypotnuseBtn.addEventListener("click", calculateHypotnuse);