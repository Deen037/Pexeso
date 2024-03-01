import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyA--0TgoI8krSgCgJnOW4sp02zj-pZCtyA",
  authDomain: "mypexeso.firebaseapp.com",
  databaseURL:
    "https://mypexeso-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mypexeso",
  storageBucket: "mypexeso.appspot.com",
  messagingSenderId: "649426292223",
  appId: "1:649426292223:web:e8405eeabcec260a646bca",
  measurementId: "G-C8WXB2ZCDB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {
  getDatabase,
  ref,
  child,
  get,
  set,
  push,
  query,
  orderByChild,
  limitToLast,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const db = getDatabase();

const scores = ref(db, "scores/");

let timeInNumber;

export function upload(data) {
  push(scores, data).catch((error) => {
    alert("Data could not be saved" + error);
  });

  timeInNumber = data.timeInNumber;
}

let poleScores;

export function getScores() {
  get(scores).then((snapshot) => {
    if (snapshot.exists()) {
      poleScores = Object.values(snapshot.val()).sort(
        (a, b) => a.timeInNumber - b.timeInNumber
      );

      const findIndexByTime = (arr, time) => {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].timeInNumber === time) {
            return i + 1;
          }
        }
        return -1;
      };

      document.getElementById("position").innerHTML = findIndexByTime(
        poleScores,
        timeInNumber
      );

      let results = document.getElementById("top20");
      let pharagraph = results.getElementsByTagName("p");

      if (pharagraph.length > 0) {
        for (let j = pharagraph.length - 1; j >= 0; j--) {
          results.removeChild(pharagraph[j]);
        }
      }

      for (let i = 0; i < 20; i++) {
        let rankDiv = document.createElement("div");
        let rankAndName = document.createElement("p");
        let rankTime = document.createElement("p");
        switch (i) {
          case 0:
            rankAndName.textContent = "🥇" + poleScores[i].name;
            rankTime.textContent = poleScores[i].time;
            results.appendChild(rankDiv);
            rankDiv.appendChild(rankAndName);
            rankDiv.appendChild(rankTime);

            break;
          case 1:
            rankAndName.textContent = "🥈" + poleScores[i].name;
            rankTime.textContent = poleScores[i].time;
            results.appendChild(rankDiv);
            rankDiv.appendChild(rankAndName);
            rankDiv.appendChild(rankTime);
            break;
          case 2:
            rankAndName.textContent = "🥉" + poleScores[i].name;
            rankTime.textContent = poleScores[i].time;
            results.appendChild(rankDiv);
            rankDiv.appendChild(rankAndName);
            rankDiv.appendChild(rankTime);
            break;
          default:
            rankAndName.textContent = i + 1 + ". " + poleScores[i].name;
            rankTime.textContent = poleScores[i].time;
            results.appendChild(rankDiv);
            rankDiv.appendChild(rankAndName);
            rankDiv.appendChild(rankTime);
        }
      }
    } else {
      console.log("No data available");
    }
  });
}
