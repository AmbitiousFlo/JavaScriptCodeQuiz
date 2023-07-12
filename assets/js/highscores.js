const highScore = document.querySelector("#highscore")
const clear = document.querySelector("#clear")
const goBack = document.querySelector("#goBack")

// Event Listener to clear scores
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// Retrieve storage locally
const allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (const i = 0; i < allScores.length; i++) {
        const createLi = document.createElement("li");
        highScore.appendChild(createLi);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const highscoreList = document.getElementById("highscore-list");
  
    // Retrieve and display highscores from localStorage
    const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    highscores.forEach(function(score) {
      const li = document.createElement("li");
      li.textContent = `${score.initials}: ${score.score}`;
      highscoreList.appendChild(li);
    });
  });
  
// Event listener to move to main page
goBack.addEventListener("click", function () {
    window.location.replace("");
});