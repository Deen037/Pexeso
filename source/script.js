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
    12: { name: "done", img: "./source/lili/blank.png" },
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

const displayWinner = () => {
  document.getElementById("winner").style.display = "flex";
  let winner;
  if (score[0] > score[1]) {
    winner = elements.player1.name;
  } else if (score[0] < score[1]) {
    winner = elements.player2.name;
  } else {
    winner = "tie";
  }
  document.getElementById("winnerName").innerHTML = winner;
};

function playAgain() {
  document.getElementById("winner").style.display = "none";
}

//game logic

let score = [0, 0];
let pathToMatch = "";
let playerOnMove = 0;
let clickPerPlayer = 0;
let isMatch = false;
let matchedCounter = 0;

const match = (field) => {
  isMatch = false;
  clickPerPlayer++;
  if (clickPerPlayer === 1) {
    pathToMatch = field.src;
  } else if (clickPerPlayer === 2) {
    if (pathToMatch === field.src) {
      matchedCounter++;
      if (playerOnMove === 0) {
        score[0]++;
        updateScore(score[0], "score1");
      } else {
        score[1]++;
        updateScore(score[1], "score2");
      }
      isMatch = true;
    } else {
      if (playerOnMove === 0) {
        playerOnMove++;
      } else {
        playerOnMove = 0;
      }
    }
    clickPerPlayer = 0;
  }
  if (matchedCounter === 10) {
    displayWinner();
  }
};

let kliky = 0; //kliky pre 2 tahy
let klik1; // prvy playerClick
let klik2; // druhy playerClick
let boxColourSwitcher = 0;

const znova = (field) => {
  kliky++;
  if (kliky === 1) {
    klik1 = field;
  } else if (kliky === 2) {
    klik2 = field;
  } else {
    if (klik1.src === klik2.src) {
      klik1.src = cards[11].img;
      klik2.src = cards[11].img;
    } else {
      klik1.src = cards[10].img;
      klik2.src = cards[10].img;
      if (boxColourSwitcher === 0) {
        boxColourSwitcher++;
      } else {
        boxColourSwitcher = 0;
      }
    }
    klik1 = field;
    kliky = 1;
  }

  // winner window

  // if () {
  //   if (score[0] > score[1]) {
  //     alert(
  //       elements.player1.shows
  //         ? `${elements.player1.show} wins`
  //         : "Player 1 wins"
  //     );
  //   } else if (score[0] === score[1]) {
  //     alert(`tie`);
  //   } else {
  //     alert(
  //       elements.player2.show
  //         ? `${elements.player2.show} wins`
  //         : "Player 2 wins"
  //     );
  //   }
  // }
};

//colors
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");
let youGo = document.getElementById("youGo");

function switchNameColor() {
  youGo.style.color = "gray";
  if (playerOnMove === 0) {
    elements.player1.div.style.color = "rgb(255, 182, 193)";
    elements.player2.div.style.color = "gray";
    leftArrow.style.color = "white";
    rightArrow.style.color = "rgb(38, 35, 32)";
  } else {
    elements.player1.div.style.color = "gray";
    elements.player2.div.style.color = "rgb(173, 216, 230)";
    leftArrow.style.color = "rgb(38, 35, 32)";
    rightArrow.style.color = "white";
  }
}
function switchBoxColour() {
  if (boxColourSwitcher === 0) {
    box3.style.backgroundColor = "gray";
    box4.style.backgroundColor = "gray";
    if (clickPerPlayer === 1) {
      box1.style.backgroundColor = "rgb(255, 182, 193)";
    }
    if (clickPerPlayer === 0) {
      box2.style.backgroundColor = "rgb(255, 182, 193)";
    }
    if (isMatch) {
      box1.style.backgroundColor = "gray";
      box2.style.backgroundColor = "gray";
    }
  } else {
    box1.style.backgroundColor = "gray";
    box2.style.backgroundColor = "gray";
    if (clickPerPlayer === 1) {
      box3.style.backgroundColor = "rgb(173, 216, 230)";
    }
    if (clickPerPlayer === 0) {
      box4.style.backgroundColor = "rgb(173, 216, 230)";
    }
    if (isMatch) {
      box3.style.backgroundColor = "gray";
      box4.style.backgroundColor = "gray";
    }
  }
}

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
          switchNameColor();
          switchBoxColour();
          // setInterval(switchColors, 1000);
        }
      };
    })(i);
  }
}

playerClick();
