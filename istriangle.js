const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

inputs.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}


function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if (sumOfAngles === 180) {
        outputEl.textContent = "Hurray!!, The Angles Form a Triangle";
    } else {
        outputEl.textContent = "Oh No, The Angles Don't Form a Triangle";
    }
}

isTriangleBtn.addEventListener("click", isTriangle)