let themeKey;

const routes = {
  "/": function () {
    themeKey = localStorage.getItem("theme") || "animals";
  },
  "/bds": function () {
    themeKey = "bds";
  },
  "/lili": function () {
    themeKey = "lili";
  },
  "/gfa": function () {
    themeKey = "gfa";
  },
  "/rebenka": function () {
    themeKey = "rebenka";
  },
};

function router() {
  const url = location.hash.slice(1) || "/";
  routes[url]();
}

window.addEventListener("hashchange", router);

router();
