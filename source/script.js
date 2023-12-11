// let themeKey = window.prompt("Please enter keycode: ");
// themeKey = themeKey.toLowerCase();

let themeKey = "bds";
const themes = {
  bds: {
    1: { name: "Máka", img: "./source/bds/maka.jpg" },
    2: { name: "Káka", img: "./source/bds/kaka.jpg" },
    3: { name: "Andy", img: "./source/bds/andy.jpg" },
    4: { name: "Dano", img: "./source/bds/dano.jpg" },
    5: { name: "Danča", img: "./source/bds/danca.jpg" },
    6: { name: "Fero", img: "./source/bds/fero.jpg" },
    7: { name: "Miro", img: "./source/bds/miro.jpg" },
    8: { name: "Pitkin", img: "./source/bds/pitkin.jpg" },
    9: { name: "Wahe", img: "./source/bds/wahe.jpg" },
    10: { name: "Oli", img: "./source/bds/oli.jpg" },
    11: { name: "cover", img: "./source/bds/logo.jpg" },
    12: { name: "done", img: "./source/bds/blank.png" },
  },
  lili: {
    1: { name: "Líba", img: "./source/lili/liba.jpeg" },
    2: { name: "Lili", img: "./source/lili/lili.jpeg" },
    3: {
      name: "Naty/Luky/Jirka",
      img: "./source/lili/martaNatyLukyJirka.jpeg",
    },
    4: { name: "Mateo", img: "./source/lili/mateo.jpeg" },
    5: { name: "Milan/Mateo/Lili", img: "./source/lili/milanMateoLili.jpeg" },
    6: {
      name: "Nikol/Stázi/Tom",
      img: "./source/lili/nikolStaziTom.jpeg",
    },
    7: { name: "Petr/Líba", img: "./source/lili/petrLiba.jpeg" },
    8: { name: "Tomáš", img: "./source/lili/tomas.jpeg" },
    9: { name: "Stázinka", img: "./source/lili/stazinka.jpeg" },
    10: { name: "Tom/Stázi/Tobiáš", img: "./source/lili/tomStaziTobias.jpeg" },
    11: { name: "cover", img: "./source/lili/logo.jpg" },
    12: { name: "done", img: "./source/lili/done.jpg" },
  },
  rebeka: { name: "Rebeka", img: "huraa" },
};

//inital board

let fields = [];
let cards = [];

for (let i = 1; i <= 20; i++) {
  fields[i] = document.getElementById("field" + i);
  fields[i].src = themes[themeKey][11].img;
  if (i < 12) {
    cards[i] = {};
  }
}

console.log(fields);

for (let i = 1; i <= 12; i++) {
  cards[i - 1] = {
    name: `${themes[themeKey][i].name}`,
    img: `${themes[themeKey][i].img}`,
  };
  if (i < 11) {
    cards[i - 1].x = (i - 1) * 2;
    cards[i - 1].y = (i - 1) * 2 + 1;
  }
}

//inputs

const elements = {
  player1: {
    div: document.getElementById("player1"),
    val: document.getElementById("input1"),
    hide: document.getElementById("form1"),
    show: document.getElementById("p1"),
    sub: document.getElementById("sub1"),
    name: "",
  },
  player2: {
    div: document.getElementById("player2"),
    val: document.getElementById("input2"),
    hide: document.getElementById("form2"),
    show: document.getElementById("p2"),
    sub: document.getElementById("sub2"),
    name: "",
  },
};

const setPlayerName = (player) => {
  player.div.innerHTML = player.val.value;
  if (player.val.value) {
    player.hide.style.display = "none";
    player.show.style.display = "inline-block";
  }
  player.name = player.div.innerHTML;
  return player.name;
};

let player1 = setPlayerName(elements.player1);
let player2 = setPlayerName(elements.player2);

const addEventListeners = (player) => {
  player.val.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      setPlayerName(player);
    }
  });
  player.sub.addEventListener("click", () => setPlayerName(player));
};

addEventListeners(elements.player1);
addEventListeners(elements.player2);

const updateScore = (score, elementId) => {
  const scoreElement = document.getElementById(elementId);
  scoreElement.innerHTML = score;
};

//random array
const comparator = (x, y) => {
  for (let i = 0; i <= x.length; i++) {
    if (y === x[i]) {
      return true;
    }
  }
};

const randomArray = () => {
  let pole = [];
  if (pole.length !== 20) {
    for (let i = 1; i <= 1000; i++) {
      let j = Math.floor(Math.random() * 20);
      if (!comparator(pole, j)) {
        pole.push(j);
      }
    }
  }
  return pole;
};
let poleNum = randomArray();

// priradenie mien k pozicii v random array
let pol = 0;
let poleNames = [];
const arrayNames = () => {
  for (let i = 0; i <= 20; i++) {
    cards.forEach((card) => {
      if (card.x === poleNum[i] || card.y === poleNum[i]) {
        poleNames.push(card);
      }
    });
  }
};
arrayNames();

//game logic

let clickPerPlayer;

let matchPath = "";
let a = {}; // premenna v uhadnutom poli
let b = {}; // premenna v uhadnutom poli
let u = []; // pole uhadnutych kariet
let y = 0; // pozicia v poli uhadnutych kariet
let score = [0, 0];
let striedanie = 0;
let clickCounter = 0;

const match = (pole) => {
  clickCounter++;
  if (clickCounter === 1) {
    matchPath = pole.src;
    a = pole;
  } else if (clickCounter === 2 && matchPath === pole.src) {
    b = pole;
    u.push(b);
    u.push(b);
    if (striedanie === 0) {
      score[0]++;
      updateScore(score[0], "score1");
    } else {
      score[1]++;
      updateScore(score[1], "score2");
    }
    striedanie--;
  }
  if (clickCounter === 2) {
    clickCounter = 0;
  }
  return clickCounter, matchPath, u, b, striedanie, score;
};

let kliky = 0; //kliky pre 2 tahy
let klik1; // prvy playerClick
let klik2; // druhy playerClick
const znova = (pole) => {
  kliky++;
  if (kliky === 1) {
    klik1 = pole;
  } else if (kliky === 2) {
    klik2 = pole;
  } else {
    if (b === u[y]) {
      klik1.src = cards[11].img;
      klik2.src = cards[11].img;
      y += 2;
    } else {
      klik1.src = cards[10].img;
      klik2.src = cards[10].img;
    }
    klik1 = pole;
    kliky = 1;

    if (striedanie === 0) {
      striedanie++;
    } else {
      striedanie = 0;
    }
  }

  // winner window

  if (u[19]) {
    if (score[0] > score[1]) {
      alert(
        elements.player1.shows
          ? `${elements.player1.show} wins`
          : "Player 1 wins"
      );
    } else if (score[0] === score[1]) {
      alert(`tie`);
    } else {
      alert(
        elements.player2.show
          ? `${elements.player2.show} wins`
          : "Player 2 wins"
      );
    }
  }

  return kliky, klik1, klik2, striedanie;
};

// priradenie ku html

function getRelativePath(url) {
  const startPos = url.indexOf("/source");
  return "." + url.slice(startPos);
}

function playerClick() {
  for (let i = 1; i <= 20; i++) {
    (function (i) {
      fields[i].onclick = () => {
        if (
          getRelativePath(fields[i].src) === poleNames[i - 1].img ||
          getRelativePath(fields[i].src) === cards[11].img
        ) {
        } else {
          fields[i].src = poleNames[i - 1].img;
          match(fields[i]);
          znova(fields[i]);
        }
      };
    })(i);
  }
}

playerClick();
