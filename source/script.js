let themeKey = window.prompt("Please enter keycode: ");
themeKey = themeKey.toLowerCase();

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
    12: { name: "done", img: "./source/bds/done.jpg" },
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

let poles = [];
let cards = [];

for (let i = 1; i <= 20; i++) {
  poles[i] = document.getElementById("pole" + i);
  poles[i].src = themes[themeKey][11].img;
  if (i < 12) {
    cards[i] = {};
  }
}

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

const player1div = document.getElementById("player1");
const sub1 = document.getElementById("input1sub");
const p1val = document.getElementById("input1");
const player2div = document.getElementById("player2");
const sub2 = document.getElementById("input2sub");
const p2val = document.getElementById("input2");
const hide1 = document.getElementById("hide1");
const hide2 = document.getElementById("hide2");
const show1 = document.getElementById("p1");
const show2 = document.getElementById("p2");

let player1 = "";
const player1name = (x) => {
  player1div.innerHTML = p1val.value;
  if (p1val.value) {
    hide1.style.display = "none";
    show1.style.display = "inline";
  }
  player1 = player1div.innerHTML;
  return player1;
};

let player2 = "";
const player2name = (x) => {
  player2div.innerHTML = p2val.value;
  if (p2val.value) {
    hide2.style.display = "none";
    show2.style.display = "inline";
  }
  player2 = player2div.innerHTML;
  return player2;
};

klikNum = 0;
p1val.addEventListener("keypress", function (value) {
  if (value.key === "Enter") {
    value.preventDefault();
    player1name();
  }
});
sub1.addEventListener("click", player1name);

p2val.addEventListener("keypress", function (value) {
  if (value.key === "Enter") {
    value.preventDefault();
    player2name();
  }
});
sub2.addEventListener("click", player2name);

const pridajScore1 = (score) => {
  const score1 = document.getElementById("skore1");
  score1.innerHTML = score;
};

const pridajMeno1 = (mena) => {
  const team1 = document.getElementById("team1");
  team1.innerHTML = mena;
};

const pridajScore2 = (score) => {
  const score1 = document.getElementById("skore2");
  score1.innerHTML = score;
};

const pridajMeno2 = (mena) => {
  const team1 = document.getElementById("team2");
  team1.innerHTML = mena;
};

const farby = (x) => {
  if (x <= 0) {
    player1div.style.color = "red";
    player2div.style.color = "white";
  }
  if (x === 1) {
    player2div.style.color = "red";
    player1div.style.color = "white";
  }
};

//random array
const porovnavac = (x, y) => {
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
      if (porovnavac(pole, j) !== true) {
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

let matchPath = "";
let a = {}; // premenna v uhadnutom poli
let b = {}; // premenna v uhadnutom poli
let u = []; // pole uhadnutych kariet
let y = 0; // pozicia v poli uhadnutych kariet
let s1 = 0;
let s2 = 0; // skore
let poleMien1 = [];
let poleMien2 = [];
let striedanie = 0;

const match = (pole, meno) => {
  klikNum++;
  if (klikNum === 1) {
    matchPath = pole.src;
    a = pole;
  } else if (klikNum === 2 && matchPath === pole.src) {
    b = pole;
    let menomatch = meno;
    //window.alert(`${menomatch.meno} JE TVOJ(a) !!!`);
    u.push(b);
    u.push(b);
    if (striedanie === 0) {
      s1++;
      poleMien1.push(` ${menomatch}`);
      pridajScore1(s1);
      pridajMeno1(poleMien1);
    } else {
      s2++;
      poleMien2.push(` ${menomatch}`);
      pridajScore2(s2);
      pridajMeno2(poleMien2);
    }
    striedanie--;
  }
  if (klikNum === 2) {
    klikNum = 0;
  }
  return klikNum, matchPath, u, b, striedanie, s1, s2;
};

let kliky = 0; //kliky pre 2 tahy
let klik1; // prvy klik
let klik2; // druhy klik
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

  farby(striedanie);

  if (u[19]) {
    if (s1 > s2) {
      alert(player1 ? `${player1} wins` : "Player 1 wins");
    } else if (s1 === s2) {
      alert(`tie`);
    } else {
      alert(player2 ? `${player2} wins` : "Player 2 wins");
    }
  }

  return kliky, klik1, klik2, striedanie;
};

// priradenie ku html

function klik() {
  for (let i = 1; i <= 20; i++) {
    (function (i) {
      poles[i].onclick = () => {
        poles[i].src = poleNames[i - 1].img;
        match(poles[i], poleNames[i - 1].name);
        znova(poles[i]);
      };
    })(i);
  }
}

klik();
