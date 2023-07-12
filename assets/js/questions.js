// Array of objects containing the question and answer options

const questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: [
      { text: "Strings", correct: false },
      { text: "Booleans", correct: true },
      { text: "Alerts", correct: false },
      { text: "Numbers", correct: false },
    ]
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    answers: [
      { text: "Numbers and Strings", correct: false },
      { text: "Other arrays", correct: false },
      { text: "Booleans", correct: true },
      { text: "All of the above", correct: false },
    ]
  },
  {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    answers: [
      { text: "Curly brackets", correct: true },
      { text: "Commas", correct: false },
      { text: "Quotes", correct: false },
      { text: "Parentheses", correct: false },
    ]
  },
  {
    question: "The condition in an if / else statement is enclosed within ____.",
    answers: [
      { text: "Parentheses", correct: false },
      { text: "Square brackets", correct: false },
      { text: "Curly brackets", correct: true },
      { text: "Quotes", correct: false },
    ]
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "For Loops", correct: true },
      { text: "console.log", correct: false },
      { text: "JavaScript", correct: false },
      { text: "Terminal/Bash", correct: false },
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");
const saveButton = document.getElementById('save-btn');
let timeLeft = 75;
let timerInterval;
let currentQuestionIndex = 0;
let score = 0;

// Initialize the quiz by setting the current question index and score
// Display the "Next" button and show the first question
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 75;
  nextButton.innerHTML = "Next";
  showQuestion();
  timerInterval = setInterval(updateTimer, 1000);
  updateScoreDisplay();
}

// Update the timer element with the current time left and check if time is up
function updateTimer() {
  timerElement.textContent = timeLeft;
  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timerInterval);
    outOfTime();
  }
}


function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

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

// Reset the state of the quiz by hiding the "Next" button and clearing the answer buttons
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Handle the selection of an answer by the user
// Update the score, apply feedback to the selected button
// Disable all buttons, and display the "Next" button
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
    updateScoreDisplay(); 
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct == "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function updateScoreDisplay() {
  const scoreLabel = document.getElementById("score");
  scoreLabel.textContent = score;
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showInitialSection();
  }
}

function showInitialSection() {
  const quizSection = document.querySelector('.quiz');
  const initialSection = document.getElementById('initial-section');
  quizSection.classList.add('hide');
  initialSection.classList.remove('hide');
}

function saveScore() {
  const initialsInput = document.getElementById("initial-input");
  const initials = initialsInput.value;
  // Perform actions with initials, e.g., save to leaderboards

  // Reset the quiz and show the quiz section again
  initialsInput.value = '';
  const quizSection = document.querySelector('.quiz');
  const initialSection = document.getElementById('initial-section');
  quizSection.classList.remove('hide');
  initialSection.classList.add('hide');
  startQuiz();
}



nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }

saveButton.addEventListener('click', saveScore);

});

startQuiz();
