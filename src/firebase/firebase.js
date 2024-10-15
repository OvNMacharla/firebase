import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHZNKAhFxiwp5qo2Pb7hAjy9unMcnvBAs",
    authDomain: "fir-1ff26.firebaseapp.com",
    projectId: "fir-1ff26",
    storageBucket: "fir-1ff26.appspot.com",
    messagingSenderId: "702584066339",
    appId: "1:702584066339:web:69490bec1852990dc8fc96",
    measurementId: "G-G4SRW40EN4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore database

export { db };
