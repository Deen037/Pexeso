let nature = document.getElementById("nature");
let legends = document.getElementById("legends");
let animals = document.getElementById("animals");
let solo = document.getElementById("solo");
let tournament = document.getElementById("tournament");
let versus = document.getElementById("versus");

function themeToogle(theme) {
  localStorage.setItem("theme", theme);
  location.reload();
}

function modeToogle(mode) {
  localStorage.setItem("mode", mode);
  location.reload();
}

nature.addEventListener("click", function () {
  themeToogle("nature");
});
legends.addEventListener("click", function () {
  themeToogle("legends");
});
animals.addEventListener("click", function () {
  themeToogle("animals");
});

solo.addEventListener("click", function () {
  modeToogle("solo");
});
// tournament.addEventListener("click", function () {
//   modeToogle("tournament");
// });
versus.addEventListener("click", function () {
  modeToogle("versus");
});

function enhanceTheme() {
  theme = localStorage.getItem("theme");
  theme.style.color = "white";
  console.log("kks");
}
