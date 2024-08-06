// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSGPSoJTrlHDXfegf4icl4-0WEGQTnJrs",
  authDomain: "netflixgpt-3253a.firebaseapp.com",
  projectId: "netflixgpt-3253a",
  storageBucket: "netflixgpt-3253a.appspot.com",
  messagingSenderId: "849163122518",
  appId: "1:849163122518:web:3ee012c663976212ae88f7",
  measurementId: "G-PS5DF3WGQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);