let nature = document.getElementById("nature");
let zodiac = document.getElementById("zodiac");
let animals = document.getElementById("animals");

function navbarToogle(theme) {
  localStorage.setItem("theme", theme);
  location.reload();
}

nature.addEventListener("click", function () {
  navbarToogle("nature");
});
zodiac.addEventListener("click", function () {
  navbarToogle("zodiac");
});
animals.addEventListener("click", function () {
  navbarToogle("animals");
});
