// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "wseifrontend.firebaseapp.com",
  projectId: "wseifrontend",
  storageBucket: "wseifrontend.firebasestorage.app",
  messagingSenderId: "901627928513",
  appId: "1:901627928513:web:c71a19a58c3b95cf325940",
  measurementId: "G-EENJXTJ0NP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
