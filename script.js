import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
//import { initializeApp } from "firebase/app";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
//import { getFirestore } from "firebase/firestore";
import { getRemoteConfig } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-remote-config.js";

const firebaseConfig = {
  apiKey: "AIzaSyAN8iGMfpIZEnS5mxrW5uRfMqWXpeAuSSc",
  authDomain: "amramdotclick.firebaseapp.com",
  projectId: "amramdotclick",
  storageBucket: "amramdotclick.appspot.com",
  messagingSenderId: "667774176347",
  appId: "1:667774176347:web:9cffa4f075c9dd8f19c37e",
  measurementId: "G-8H5T23DG00"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const userEmail = localStorage.getItem("email");

if (userEmail != null) {
  document.getElementById("name").innerHTML = "<h3 style='display:inline;'>"+userEmail+"</h3> <button class='generalbtn' style='display:inline;' onclick='window.location.href=\"/logout.html\"'>Logout</button>";
} else {
  document.getElementById("name").innerHTML = "<h3 style='display:inline;'>Not logged in </h3> <button class='generalbtn' style='display:inline;' onclick='window.location.href=\"/login.html\"'>Login</button></span>";
}

// Data

let list = document.getElementById("list");

if (userEmail == null) {
  list.innerHTML = "<h1 style='font-weight:300'>You are not logged in.</h1><h3 style='font-weight:300'>Log in to see your medications</h3>"
  document.getElementById("add").innerHTML = "";
} else {

const db = getFirestore();
const userData = collection(db, userEmail);
let med = [];
let medt = [];
let medtime = [];
var DAT;
var DATA;

for (let i = 1; i <= 32; i++) {
  DAT = await getDoc(doc(userData, `med-${i}`))
  DATA = DAT.data();
  if (DAT.exists()) {
    med[i] = [DATA.name, DATA.quantity, DATA.unit, DATA.breakfast, DATA.lunch, DATA.dinner, DATA.night];
    //console.log(med);
  } else {
    med[i] = null;
  }
}

for (let i = 1; i <= 32; i++) {
  if (med[i] != null) {
    medt[i] = [];
    if (med[i][3] == true) {
      medt[i].push("Breakfast")
    } if (med[i][4] == true) {
      medt[i].push("Lunch")
    } if (med[i][5] == true) {
      medt[i].push("Dinner")
    } if (med[i][6] == true) {
      medt[i].push("Night")
    }
    medtime[i] = medt[i].join(", ");
    //console.log(medtime[i])
  } else {
    medt[i] = null;
  }
}

list.innerHTML = "";

function edit(med, id) {
  localStorage.setItem("med", med);
  localStorage.setItem("id", id);
  window.location.href = "/edit.html";
}

for (let i = 1; i <= 32; i++) {
  if (med[i] != null) {
    let li = document.createElement("li");
    li.setAttribute("class", "med");
    li.innerHTML = "<h1 style='font-weight:600'>"+med[i][0]+"</h1><h2 style='font-weight:400'>"+med[i][1]+" "+med[i][2]+"</h2><p>For: "+medtime[i]+"</p><button class='generalbtn' style='background-color:grey'><b>Edit</b></button>"
    list.appendChild(li);

    li.querySelector("button").addEventListener("click", () => {
      edit(med[i][0], i);
    })
  }
}

if (med.every(element => element === null)) {
  list.innerHTML = "<h1 style='font-weight:300'>You have no medications.</h1><h3 style='font-weight:300'>Start keeping track of them by clicking the green button above!</h3>"
}
}
