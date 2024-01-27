import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
//import { initializeApp } from "firebase/app";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
//import { getFirestore } from "firebase/firestore";
import { getRemoteConfig } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-remote-config.js";
import * as fire from "./firebase_setup.js";

const firebaseConfig = {
  apiKey: "AIzaSyAN8iGMfpIZEnS5mxrW5uRfMqWXpeAuSSc",
  authDomain: "amramdotclick.firebaseapp.com",
  projectId: "amramdotclick",
  storageBucket: "amramdotclick.appspot.com",
  messagingSenderId: "667774176347",
  appId: "1:667774176347:web:9cffa4f075c9dd8f19c37e",
  measurementId: "G-8H5T23DG00"
};

firebase.initializeApp(firebaseConfig);

const auth = getAuth();
const user = auth.currentUser;

if (user !== null) {
  document.getElementById("name").innerHTML = userId.displayName;
} else {
  document.getElementById("name").innerHTML = "Not logged in";
}