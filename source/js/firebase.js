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

export function upload(data) {
  push(scores, data).catch((error) => {
    alert("Data could not be saved" + error);
  });
}

export let scoreArr;

export async function getScores() {
  const snapshot = await get(scores);

  if (snapshot.exists()) {
    scoreArr = Object.values(snapshot.val()).sort(
      (a, b) => a.timeInNumber - b.timeInNumber
    );
  } else {
    console.log("No data available");
  }
}
