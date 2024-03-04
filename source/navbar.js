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
}

let theme = localStorage.getItem("theme");
let mode = localStorage.getItem("mode");

function enhanceNavbar() {
  if (theme) {
    document.getElementById(theme).style.color = "rgb(255, 182, 193)";
  } else {
    document.getElementById("animals").style.color = "rgb(255, 182, 193)";
  }
  if (mode) {
    document.getElementById(mode).style.color = "rgb(173, 216, 230)";
  } else {
    document.getElementById("versus").style.color = "rgb(173, 216, 230)";
  }
}
enhanceNavbar();

let headerVersus = document.getElementById("headerVersus");
let headerSolo = document.getElementById("headerSolo");

switch (mode) {
  case "solo":
    headerVersus.style.display = "none";
    headerSolo.style.display = "block";
    break;
  case "versus":
    headerVersus.style.display = "block";
    headerSolo.style.display = "none";
    break;
}
