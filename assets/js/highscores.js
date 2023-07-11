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
// Event listener to move to main page
goBack.addEventListener("click", function () {
    window.location.replace("");
});