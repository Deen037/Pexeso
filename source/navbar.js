let nature = document.getElementById("nature");
let zodiac = document.getElementById("zodiac");

nature.addEventListener("click", function () {
  localStorage.setItem("theme", "nature");
  location.reload();
});

zodiac.addEventListener("click", function () {
  localStorage.setItem("theme", "zodiac");
  location.reload();
});
