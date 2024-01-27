import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
//import { initializeApp } from "firebase/app";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
//import { getFirestore } from "firebase/firestore";
import { getRemoteConfig } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-remote-config.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const auth = firebase.auth();

