const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");

const correctAnswers = ["A triangle is a three-sided polygon", "90°", "right angled", "35 cm2", "A = 62.35"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    outputEl.textContent = "Your Score is " + score;
}

submitAnswerBtn.addEventListener("click", calculateScore);