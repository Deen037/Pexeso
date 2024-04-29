let themeKey;
let themes = document.getElementsByClassName("themes")[0];
let home = document.querySelector("#headerLeft a");

const routes = {
  "/": function () {
    themeKey = localStorage.getItem("theme") || "animals";
    home.style.display = "none";
  },
  "/bds": function () {
    themeKey = "bds";
    themes.style.display = "none";
  },
  "/lili": function () {
    themeKey = "lili";
    themes.style.display = "none";
  },
  "/gfa": function () {
    themeKey = "gfa";
    themes.style.display = "none";
  },
  "/rebenka": function () {
    themeKey = "rebenka";
    themes.style.display = "none";
  },
  "/detib": function () {
    themeKey = "detib";
    themes.style.display = "none";
  },
  "/test": function () {
    themeKey = "test";
    themes.style.display = "none";
  },
};

function router() {
  const url = location.hash.slice(1) || "/";
  routes[url]();
}

window.addEventListener("hashchange", router);

router();
