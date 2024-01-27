import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
//import { initializeApp } from "firebase/app";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
//import { getFirestore } from "firebase/firestore";
import { getRemoteConfig } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-remote-config.js";


const auth = firebase.auth();
const user = auth.currentUser;

if (user !== null) {
  document.getElementById("name").innerHTML = userId.displayName;
} else {
  document.getElementById("name").innerHTML = "<h3 style='display:inline;'>Not logged in </h3> <button class='loginbtn' style='display:inline;' onclick='window.location.href=\"/login.html\"'>Login</button></span>";
}