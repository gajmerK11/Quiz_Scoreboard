document.addEventListener("DOMContentLoaded", function () {
  const teams = ["team1", "team2", "team3", "team4"];

  teams.forEach((team) => {
    const increaseBtn = document.getElementById(`btn-increase-${team}`);
    const decreaseBtn = document.getElementById(`btn-decrease-${team}`);
    const resetBtn = document.getElementById(`btn-reset-${team}`);
    const scoreDisplay = document.getElementById(`score-${team}`);

    let score = localStorage.getItem(team)
      ? parseInt(localStorage.getItem(team))
      : 0;
    scoreDisplay.textContent = score;

    increaseBtn.addEventListener("click", () => {
      score++;
      updateScore();
    });

    decreaseBtn.addEventListener("click", () => {
      if (score > 0) score--;
      updateScore();
    });

    resetBtn.addEventListener("click", () => {
      score = 0;
      updateScore();
    });

    function updateScore() {
      scoreDisplay.textContent = score;
      localStorage.setItem(team, score);
    }
  });
});
