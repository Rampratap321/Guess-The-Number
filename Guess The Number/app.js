if (!localStorage.getItem("secretNumber")) {
  const num = Math.floor(Math.random() * 100) + 1;
  localStorage.setItem("secretNumber", num);
  console.log("Secret Number:", num); // for testing
}

function checkGuess() {
  const input = document.getElementById("guess");
  const val = parseInt(input.value, 10);
  const target = parseInt(localStorage.getItem("secretNumber"), 10);
  const errorEl = document.getElementById("error");

  if (isNaN(val) || val < 1 || val > 100) {
    errorEl.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  if (val === target) {
    localStorage.removeItem("secretNumber"); // reset for new game
    window.location.href = "right.html";
  } else if (val < target) {
    window.location.href = "low.html";
  } else {
    window.location.href = "high.html";
  }
}
