// script.js

// Initialize scores or get from local storage
let scores = JSON.parse(localStorage.getItem("quizScores")) || {
  team1: 0,
  team2: 0,
  team3: 0,
  team4: 0,
};

// Function to update the score display
function updateScoreDisplay() {
  document.getElementById("score-team1").innerText = scores.team1;
  document.getElementById("score-team2").innerText = scores.team2;
  document.getElementById("score-team3").innerText = scores.team3;
  document.getElementById("score-team4").innerText = scores.team4;
}

// Function to save scores to local storage
function saveScores() {
  localStorage.setItem("quizScores", JSON.stringify(scores));
}

// Function to increase score
function increaseScore(team) {
  scores[team]++;
  updateScoreDisplay();
  saveScores(); // Save to local storage
}

// Function to decrease score
function decreaseScore(team) {
  if (scores[team] > 0) {
    // Prevent negative scores
    scores[team]--;
    updateScoreDisplay();
    saveScores(); // Save to local storage
  }
}

// Event listeners for buttons
document
  .getElementById("btn-increase-team1")
  .addEventListener("click", () => increaseScore("team1"));
document
  .getElementById("btn-decrease-team1")
  .addEventListener("click", () => decreaseScore("team1"));

document
  .getElementById("btn-increase-team2")
  .addEventListener("click", () => increaseScore("team2"));
document
  .getElementById("btn-decrease-team2")
  .addEventListener("click", () => decreaseScore("team2"));

document
  .getElementById("btn-increase-team3")
  .addEventListener("click", () => increaseScore("team3"));
document
  .getElementById("btn-decrease-team3")
  .addEventListener("click", () => decreaseScore("team3"));

document
  .getElementById("btn-increase-team4")
  .addEventListener("click", () => increaseScore("team4"));
document
  .getElementById("btn-decrease-team4")
  .addEventListener("click", () => decreaseScore("team4"));

// Initialize the scores on page load
updateScoreDisplay();
