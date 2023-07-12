// Array of objects containing the question and answer options

const questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ]
  },
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ]
  },
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ]
  },
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ]
  },
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
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

// Display the current question and its answer options
// Add event listeners to the answer buttons
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
  const initialsInput = document.getElementById('initial-input');
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
