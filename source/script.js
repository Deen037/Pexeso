let themeKey = window.prompt("Please enter code / Prosím zadejte kód : ");
themeKey = themeKey.toLowerCase();

//setLanguage
let language = themes[themeKey].language;
let lang = languages[language];
document.getElementById("input1").placeholder = lang.player1;
document.getElementById("input2").placeholder = lang.player2;
document.getElementById("sub1").value = lang.submit;
document.getElementById("sub2").value = lang.submit;
document.getElementsByClassName("winsLabel")[0].innerHTML = lang.wins;
document.getElementsByClassName("winsLabel")[1].innerHTML = lang.wins;
document.getElementById("youGo").innerHTML = lang.youGo;
document.getElementById("theChamp").innerHTML = lang.theChamp;
document.getElementById("playAgain").innerHTML = lang.playAgain;

//inital board

let fields = [];
let cards = [];

function addAtributes() {
  for (let i = 1; i <= 20; i++) {
    fields[i] = document.getElementById("field" + i);
    fields[i].src = themes[themeKey][11].img;
    if (i < 12) {
      cards[i] = {};
    }
  }
}

addAtributes();

function createThemeCards() {
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
}

createThemeCards();

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

let winsCounter1 = 0;
let winsCounter2 = 0;

const displayWinner = () => {
  document.getElementById("winner").style.display = "flex";
  let winner;
  if (score[0] > score[1]) {
    winsCounter1++;
    winner = elements.player1.name ? elements.player1.name : lang.player1;
  } else if (score[0] < score[1]) {
    winsCounter2++;
    winner = elements.player2.name ? elements.player2.name : lang.player2;
  } else {
    winner = lang.tie;
  }
  document.getElementById("winnerName").innerHTML = winner;
};

//game logic

let score = [0, 0];
let pathToMatch = "";
let playerOnMove = 0;
let clickPerPlayer = 0;
let isMatch = false;
let matchedCounter = 0;

function vanish() {
  score = [0, 0];
  updateScore(score[0], "score1");
  updateScore(score[1], "score2");
  pathToMatch = "";
  playerOnMove = 0;
  clickPerPlayer = 0;
  isMatch = false;
  matchedCounter = 0;
  clicks = 0; //clicks pre 2 tahy
  click1; // prvy playerClick
  click2; // druhy playerClick
  boxColourSwitcher = 0;
}

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

let clicks = 0;
let click1;
let click2;
let boxColourSwitcher = 0;

const znova = (field) => {
  clicks++;
  if (clicks === 1) {
    click1 = field;
  } else if (clicks === 2) {
    click2 = field;
  } else {
    if (click1.src === click2.src) {
      click1.src = cards[11].img;
      click2.src = cards[11].img;
    } else {
      click1.src = cards[10].img;
      click2.src = cards[10].img;
      if (boxColourSwitcher === 0) {
        boxColourSwitcher++;
      } else {
        boxColourSwitcher = 0;
      }
    }
    click1 = field;
    clicks = 1;
  }
};

//colors

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");
let youGo = document.getElementById("youGo");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

function switchNameColor() {
  youGo.style.color = "rgb(192, 192, 192)";
  if (playerOnMove === 0) {
    elements.player1.div.style.color = "rgb(255, 182, 193)";
    elements.player1.div.style.fontSize = "25px";
    elements.player2.div.style.color = "rgb(192, 192, 192)";
    elements.player2.div.style.fontSize = "20px";
    leftArrow.style.color = "white";
    rightArrow.style.color = "rgb(38, 35, 32)";
  } else {
    elements.player1.div.style.color = "rgb(192, 192, 192)";
    elements.player1.div.style.fontSize = "20px";
    elements.player2.div.style.color = "rgb(173, 216, 230)";
    elements.player2.div.style.fontSize = "25px";
    leftArrow.style.color = "rgb(38, 35, 32)";
    rightArrow.style.color = "white";
  }
}

function switchBoxColour() {
  if (boxColourSwitcher === 0) {
    box3.style.backgroundColor = "rgb(64, 64, 64)";
    box4.style.backgroundColor = "rgb(64, 64, 64)";
    if (clickPerPlayer === 1) {
      box1.style.backgroundColor = "rgb(255, 182, 193)";
    }
    if (clickPerPlayer === 0) {
      box2.style.backgroundColor = "rgb(255, 182, 193)";
    }
    if (isMatch) {
      box1.style.backgroundColor = "rgb(64, 64, 64)";
      box2.style.backgroundColor = "rgb(64, 64, 64)";
    }
  } else {
    box1.style.backgroundColor = "rgb(64, 64, 64)";
    box2.style.backgroundColor = "rgb(64, 64, 64)";
    if (clickPerPlayer === 1) {
      box3.style.backgroundColor = "rgb(173, 216, 230)";
    }
    if (clickPerPlayer === 0) {
      box4.style.backgroundColor = "rgb(173, 216, 230)";
    }
    if (isMatch) {
      box3.style.backgroundColor = "rgb(64, 64, 64)";
      box4.style.backgroundColor = "rgb(64, 64, 64)";
    }
  }
}

//onClick functionality

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
        }
      };
    })(i);
  }
}

playerClick();

function playAgain() {
  poleNum = randomArray();
  poleNames = [];
  arrayNames();
  document.getElementById("winner").style.display = "none";
  document.getElementsByClassName("helper")[0].style.display = "none";
  document.getElementById("p1wins").innerHTML = winsCounter1;
  document.getElementById("p2wins").innerHTML = winsCounter2;
  let wins = document.getElementsByClassName("wins");
  for (let i = 0; i < wins.length; i++) {
    wins[i].style.display = "flex";
  }
  leftArrow.style.color = "white";
  rightArrow.style.color = "rgb(38, 35, 32)";
  addAtributes();
  createThemeCards();
  vanish();
  console.log(poleNum);
}
