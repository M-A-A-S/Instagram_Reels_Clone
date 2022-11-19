import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLit3tjzL9GPnEdlIBosvAI5iLXHiVYv8",
  authDomain: "ig-reels-5bab7.firebaseapp.com",
  projectId: "ig-reels-5bab7",
  storageBucket: "ig-reels-5bab7.appspot.com",
  messagingSenderId: "217855220471",
  appId: "1:217855220471:web:b80b7fe837b145b72f91f2",
  measurementId: "G-146REMM82T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
