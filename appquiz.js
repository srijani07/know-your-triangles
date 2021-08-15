var formArea = document.querySelector("form")
var score = 0;

function scoreCounter() {
 score++;
}
var correctAnswer = document.querySelectorAll('.correct-answer').forEach(item => {
    item.addEventListener('click', scoreCounter, {once : true})
    })
var btnSubmit = document.querySelector("#btn-check")
var resultArea = document.querySelector("#result-area")
var retakeQuiz = document.querySelector("#retake-quiz")


formArea.style.display = "block";
resultArea.style.display = "none";
retakeQuiz.style.display = "none"


function scoreDisplay() {
resultArea.innerHTML = "Your total score is : "+score;
resultArea.style.display = "block";
formArea.style.display = "none";
btnSubmit.style.display = "none";
retakeQuiz.style.display = "block"

}

btnSubmit.addEventListener('click', scoreDisplay)