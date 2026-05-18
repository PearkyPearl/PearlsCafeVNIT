let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.innerText = "☀️";
  } else {
    themeBtn.innerText = "🌙";
  }
});

function filterMenu(category) {
  let cards = document.querySelectorAll(".menu-card");

  cards.forEach(function (card) {
    if (category === "all") {
      card.style.display = "block";
    } else if (card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function examMode() {
  document.body.classList.toggle("exam-mode");

  alert("Exam Week Mode activated! Caffeine items and survival combos are now your best friends.");
}
