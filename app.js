

const encoding = 'utf8';
fetch("./m.txt")
.then((data) =>
{
    data = data.text();
    let i = 0;
    let j = 0;
    const answ = [];
    const a = [];
  
    while (j < 400) {
      let res = '';
      let res1 = '';
      const listt = [];
  
      while (data[i] !== '•') {
        if (data[i] === '√') {
          break;
        }
        console.log(data[i]);
        res += data[i];
        i++;
      }
  
      listt.push(res);
      res = '';
      let count = 0;
      i -= 2;
  
      while (count !== 5) {
        try {
          res1 += data.slice(i + 1, data.slice(i + 1).indexOf('\n') + i);
          i += data.slice(i + 1).indexOf('\n') + 1;
  
          if (res1.includes('√')) {
            res1 = ' •' + res1.slice(2);
            const correct = res1;
            listt.push(correct);
          } else {
            listt.push(res1);
          }
  
          res1 = '';
          count++;
        } catch (e) {
          // Ignore ValueError
        }
      }
  
      answ.push(listt);
      j++;
    }
  
    console.log(answ,"gfdgytfcbrcbc");
    return answ;
  });
  



  

    








const questions = [
    {
        question: "answ[0][0]",
        answers: [
            { text: "Cevap 1", correct: false },
            { text: "Cevap 2", correct: false },
            { text: "Cevap 3", correct: false },
            { text: "Cevap 4", correct: true }
        ]
    },
    {
        question: "Soru 2?",
        answers: [
            { text: "Cevap 1", correct: false },
            { text: "Cevap 2", correct: true },
            { text: "Cevap 3", correct: false },
            { text: "Cevap 4", correct: false }
        ]
    },
    {
        question: "Soru 3?",
        answers: [
            { text: "Cevap 1", correct: true },
            { text: "Cevap 2", correct: false },
            { text: "Cevap 3", correct: false },
            { text: "Cevap 4", correct: false }
        ]
    },
    {
        question: "Soru 4?",
        answers: [
            { text: "Cevap 1", correct: true },
            { text: "Cevap 2", correct: false },
            { text: "Cevap 3", correct: false },
            { text: "Cevap 4", correct: false }
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ".  " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

startQuiz();



