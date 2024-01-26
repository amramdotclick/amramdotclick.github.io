import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getRemoteConfig } from "firebase/remote-config";

var firebase = require('firebase');
var firebaseui = require('firebaseui');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN8iGMfpIZEnS5mxrW5uRfMqWXpeAuSSc",
  authDomain: "amramdotclick.firebaseapp.com",
  projectId: "amramdotclick",
  storageBucket: "amramdotclick.appspot.com",
  messagingSenderId: "667774176347",
  appId: "1:667774176347:web:9cffa4f075c9dd8f19c37e",
  measurementId: "G-8H5T23DG00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);