let themeKey;

const routes = {
  "/": function () {
    themeKey = localStorage.getItem("theme") || "animals";
  },
  "/bds": function () {
    themeKey = "bds";
    document.getElementById("nav").style.display = "none";
  },
  "/lili": function () {
    themeKey = "lili";
    document.getElementById("nav").style.display = "none";
  },
  "/gfa": function () {
    themeKey = "gfa";
    document.getElementById("nav").style.display = "none";
  },
  "/rebenka": function () {
    themeKey = "rebenka";
    document.getElementById("nav").style.display = "none";
  },
};

function router() {
  const url = location.hash.slice(1) || "/";
  routes[url]();
}

window.addEventListener("hashchange", router);

router();
