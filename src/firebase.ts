// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0pWgC-L_yIf4KMcEesl6dQZHASEiQhfs",
  authDomain: "habit-forming-application.firebaseapp.com",
  projectId: "habit-forming-application",
  storageBucket: "habit-forming-application.firebasestorage.app",
  messagingSenderId: "601071867946",
  appId: "1:601071867946:web:d11f90635a36dce2798b53",
  measurementId: "G-9KCFR7P7HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);