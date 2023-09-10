const pole1 = document.getElementById("pole1");
const pole2 = document.getElementById("pole2");
const pole3 = document.getElementById("pole3");
const pole4 = document.getElementById("pole4");
const pole5 = document.getElementById("pole5");
const pole6 = document.getElementById("pole6");
const pole7 = document.getElementById("pole7");
const pole8 = document.getElementById("pole8");
const pole9 = document.getElementById("pole9");
const pole10 = document.getElementById("pole10");
const pole11 = document.getElementById("pole11");
const pole12 = document.getElementById("pole12");
const pole13 = document.getElementById("pole13");
const pole14 = document.getElementById("pole14");
const pole15 = document.getElementById("pole15");
const pole16 = document.getElementById("pole16");
const pole17 = document.getElementById("pole17");
const pole18 = document.getElementById("pole18");
const pole19 = document.getElementById("pole19");
const pole20 = document.getElementById("pole20");

//const player1txt = document.createTextNode("Krasavec");
//player1.appendChild(player1txt);

const logo = "./source/logo200x200/logo.jpg";
const ok = "./source/logo200x200/done.jpg";
const Maka = {
  meno: "Maka",
  zdroj: "./source/foto200x150/maka.jpg",
  x: 0,
  y: 1,
};
const Kaka = {
  meno: "Kaka",
  zdroj: "./source/foto200x150/kaka.jpg",
  x: 2,
  y: 3,
};
const Andy = {
  meno: "Andy",
  zdroj: "./source/foto200x150/andy.jpg",
  x: 4,
  y: 5,
};
const Dano = {
  meno: "Dano",
  zdroj: "./source/foto200x150/dano.jpg",
  x: 6,
  y: 7,
};
const Danca = {
  meno: "Danca",
  zdroj: "./source/foto200x150/danca.jpg",
  x: 8,
  y: 9,
};
const Fero = {
  meno: "Fero",
  zdroj: "./source/foto200x150/fero.jpg",
  x: 10,
  y: 11,
};
const Miro = {
  meno: "Miro",
  zdroj: "./source/foto200x150/miro.jpg",
  x: 12,
  y: 13,
};
const Pitkin = {
  meno: "Pitkin",
  zdroj: "./source/foto200x150/pitkin.jpg",
  x: 14,
  y: 15,
};
const Wahe = {
  meno: "Wahe",
  zdroj: "./source/foto200x150/wahe.jpg",
  x: 16,
  y: 17,
};
const Oli = {
  meno: "Oli",
  zdroj: "./source/foto200x150/oli.jpg",
  x: 18,
  y: 19,
};

const player1 = document.getElementById("player1");
const sub1 = document.getElementById("input1sub");
const p1val = document.getElementById("input1");
const player2 = document.getElementById("player2");
const sub2 = document.getElementById("input2sub");
const p2val = document.getElementById("input2");
const hide1 = document.getElementById("hide1");
const hide2 = document.getElementById("hide2");
const show1 = document.getElementById("p1");
const show2 = document.getElementById("p2");

let hrac1 = "";
const player1name = (x) => {
  player1.innerHTML = p1val.value;
  if (p1val.value) {
    hide1.style.display = "none";
    show1.style.display = "inline";
  }
  hrac1 = player1.innerHTML;
  return hrac1;
};

let hrac2 = "";
const player2name = (x) => {
  player2.innerHTML = p2val.value;
  if (p2val.value) {
    hide2.style.display = "none";
    show2.style.display = "inline";
  }
  hrac2 = player2.innerHTML;
  return hrac2;
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
    player1.style.color = "red";
    player2.style.color = "white";
  }
  if (x === 1) {
    player2.style.color = "red";
    player1.style.color = "white";
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
console.log(poleNum);

// priradenie mien k pozicii v random array
let pol = 0;
let poleNames = [];
const arrayNames = () => {
  for (let i = 0; i <= 20; i++) {
    if (Maka.x === poleNum[i]) {
      poleNames.push(Maka);
    }
    if (Maka.y === poleNum[i]) {
      poleNames.push(Maka);
    }
    if (Kaka.x === poleNum[i]) {
      poleNames.push(Kaka);
    }
    if (Kaka.y === poleNum[i]) {
      poleNames.push(Kaka);
    }
    if (Andy.x === poleNum[i]) {
      poleNames.push(Andy);
    }
    if (Andy.y === poleNum[i]) {
      poleNames.push(Andy);
    }
    if (Dano.x === poleNum[i]) {
      poleNames.push(Dano);
    }
    if (Dano.y === poleNum[i]) {
      poleNames.push(Dano);
    }
    if (Danca.x === poleNum[i]) {
      poleNames.push(Danca);
    }
    if (Danca.y === poleNum[i]) {
      poleNames.push(Danca);
    }
    if (Fero.x === poleNum[i]) {
      poleNames.push(Fero);
    }
    if (Fero.y === poleNum[i]) {
      poleNames.push(Fero);
    }
    if (Miro.x === poleNum[i]) {
      poleNames.push(Miro);
    }
    if (Miro.y === poleNum[i]) {
      poleNames.push(Miro);
    }
    if (Pitkin.x === poleNum[i]) {
      poleNames.push(Pitkin);
    }
    if (Pitkin.y === poleNum[i]) {
      poleNames.push(Pitkin);
    }
    if (Wahe.x === poleNum[i]) {
      poleNames.push(Wahe);
    }
    if (Wahe.y === poleNum[i]) {
      poleNames.push(Wahe);
    }
    if (Oli.x === poleNum[i]) {
      poleNames.push(Oli);
    }
    if (Oli.y === poleNum[i]) {
      poleNames.push(Oli);
    }
  }
  return poleNames;
};

arrayNames();
console.log(poleNames);

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
      poleMien1.push(` ${menomatch.meno}`);
      pridajScore1(s1);
      pridajMeno1(poleMien1);
    } else {
      s2++;
      poleMien2.push(` ${menomatch.meno}`);
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
      klik1.src = ok;
      klik2.src = ok;
      y += 2;
    } else {
      klik1.src = logo;
      klik2.src = logo;
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
      alert(`${hrac1} is ej WINNERRRR`);
    } else if (s1 === s2) {
      alert(`REMIIIIZA`);
    } else {
      alert(`${hrac2} is ej WINNERRRR`);
    }
  }

  return kliky, klik1, klik2, striedanie;
};

// priradenie ku html
const klik = () => {
  pole1.onclick = () => {
    pole1.src = poleNames[0].zdroj;
    match(pole1, poleNames[0]);
    znova(pole1);
  };

  pole2.onclick = () => {
    pole2.src = poleNames[1].zdroj;
    match(pole2, poleNames[1]);
    znova(pole2);
  };

  pole3.onclick = () => {
    pole3.src = poleNames[2].zdroj;
    match(pole3, poleNames[2]);
    znova(pole3);
  };

  pole4.onclick = () => {
    pole4.src = poleNames[3].zdroj;
    match(pole4, poleNames[3]);
    znova(pole4);
  };

  pole5.onclick = () => {
    pole5.src = poleNames[4].zdroj;
    match(pole5, poleNames[4]);
    znova(pole5);
  };

  pole6.onclick = () => {
    pole6.src = poleNames[5].zdroj;
    match(pole6, poleNames[5]);
    znova(pole6);
  };

  pole7.onclick = () => {
    pole7.src = poleNames[6].zdroj;
    match(pole7, poleNames[6]);
    znova(pole7);
  };

  pole8.onclick = () => {
    pole8.src = poleNames[7].zdroj;
    match(pole8, poleNames[7]);
    znova(pole8);
  };

  pole9.onclick = () => {
    pole9.src = poleNames[8].zdroj;
    match(pole9, poleNames[8]);
    znova(pole9);
  };

  pole10.onclick = () => {
    pole10.src = poleNames[9].zdroj;
    match(pole10, poleNames[9]);
    znova(pole10);
  };
  pole11.onclick = () => {
    pole11.src = poleNames[10].zdroj;
    match(pole11, poleNames[10]);
    znova(pole11);
  };
  pole12.onclick = () => {
    pole12.src = poleNames[11].zdroj;
    match(pole12, poleNames[11]);
    znova(pole12);
  };
  pole13.onclick = () => {
    pole13.src = poleNames[12].zdroj;
    match(pole13, poleNames[12]);
    znova(pole13);
  };
  pole14.onclick = () => {
    pole14.src = poleNames[13].zdroj;
    match(pole14, poleNames[13]);
    znova(pole14);
  };
  pole15.onclick = () => {
    pole15.src = poleNames[14].zdroj;
    match(pole15, poleNames[14]);
    znova(pole15);
  };
  pole16.onclick = () => {
    pole16.src = poleNames[15].zdroj;
    match(pole16, poleNames[15]);
    znova(pole16);
  };
  pole17.onclick = () => {
    pole17.src = poleNames[16].zdroj;
    match(pole17, poleNames[16]);
    znova(pole17);
  };
  pole18.onclick = () => {
    pole18.src = poleNames[17].zdroj;
    match(pole18, poleNames[17]);
    znova(pole18);
  };
  pole19.onclick = () => {
    pole19.src = poleNames[18].zdroj;
    match(pole19, poleNames[18]);
    znova(pole19);
  };
  pole20.onclick = () => {
    pole20.src = poleNames[19].zdroj;
    match(pole20, poleNames[19]);
    znova(pole20);
  };
};

klik();
