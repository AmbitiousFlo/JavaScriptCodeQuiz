var startBtn= document.getElementById("start-btn")
var introSectionEl= document.getElementById("intro-section")
 
var questionSectionEl=document.getElementById("question-section")
var titleEl=document.getElementById('title')
var timerEl=document.getElementById('timer')
var choicesEl = document.querySelectorAll(".choices")
var questionIndex=0
var questionsArray=[
    {
        title:"Commonly used data types DO NOT include:",
        choices:["Strings","Booleans","Alerts","Numbers"],
        answer:"Alerts" 
    },
    {
        title:"Arrays in JavaScript can be used to store ____.",
        choices:["Numbers and Strings","Other arrays","Booleans","All of the above"],
        answer:"All of the above" 
    },
    {
        title:"String values must be enclosed within _____ when being assigned to variables.",
        choices:["Curly brackets","Commas","Quotes","Parentheses"],
        answer:"Quotes" 
    },
    {
        title:"The condition in an if / else statement is enclosed within ____.",
        choices:["Parentheses","Square brackets","Curly brackets","Quotes"],
        answer:"Parentheses" 
    },
    {
        title:"A very useful tool used during development and debugging for printing content to the debugger is:",
        choices:["For Loops","console.log","JavaScript","Terminal/Bash"],
        answer:"console.log" 
    }
]

var timeLeft=questionsArray.length* 15

/*
  1. hide intro section
  2. start timer
  3. show questions
  4. data structure to store questions and choices

*/

var setIntervalId=0;

function startQuiz(){
  //  introSectionEl.classList.add("hide")
  introSectionEl.setAttribute("class","hide")
  questionSectionEl.removeAttribute("class")
  setIntervalId=setInterval(countDown,1000)
  showQuestions()
}

function countDown(){
 timerEl.textContent=timeLeft--
 if(timeLeft===0){
    clearInterval(setIntervalId)
 }
}

function showQuestions(){
    titleEl.textContent=questionsArray[questionIndex].title

    choicesEl[0].textContent=questionsArray[questionIndex].choices[0]

    choicesEl[1].textContent=questionsArray[questionIndex].choices[1]

    choicesEl[2].textContent=questionsArray[questionIndex].choices[2]

    choicesEl[3].textContent=questionsArray[questionIndex].choices[3]



}

function nextQuestion(event){
  var currentElement= event.target
  if(currentElement.matches("button")){
    questionIndex++
    showQuestions()
  }
}

startBtn.addEventListener("click", startQuiz)

questionSectionEl.addEventListener("click",nextQuestion )
