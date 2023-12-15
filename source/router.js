let themeKey = "gfa";

const routes = {
  "/": function () {
    themeKey = window.prompt("Please enter code / Prosím zadejte kód : ");
    themeKey = themeKey.toLowerCase();
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
};

function router() {
  const url = location.hash.slice(1) || "/";
  routes[url]();
}

window.addEventListener("hashchange", router);

router();
