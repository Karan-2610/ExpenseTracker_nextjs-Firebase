// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6O3E-YQQiZrBxLFWuIZ-L2uP9U9RtAmI",
  authDomain: "expenses-ef06d.firebaseapp.com",
  projectId: "expenses-ef06d",
  storageBucket: "expenses-ef06d.appspot.com",
  messagingSenderId: "463545670066",
  appId: "1:463545670066:web:a04634c060d82202b1acab",
  measurementId: "G-HPM8B03PKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export let firestore = getFirestore(app);
export let auth = getAuth(app);