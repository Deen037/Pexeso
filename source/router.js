let themeKey;

const routes = {
  "/": function () {
    // themeKey = window.prompt("Please enter code / Prosím zadejte kód : ");
    // themeKey = themeKey.toLowerCase();
    themeKey = localStorage.getItem("theme") || "zodiac";
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
  "/earth": function () {
    themeKey = "earth";
  },
  "/zodiac": function () {
    themeKey = "zodiac";
  },
};

function router() {
  const url = location.hash.slice(1) || "/";
  routes[url]();
  console.log(themeKey);
}

window.addEventListener("hashchange", router);

router();
