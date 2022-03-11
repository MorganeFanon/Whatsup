// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPSqtmt1V-CYhJkjXBe-bfqTzuMLRAbMY",
  authDomain: "whatsup-badf1.firebaseapp.com",
  projectId: "whatsup-badf1",
  storageBucket: "whatsup-badf1.appspot.com",
  messagingSenderId: "844349785856",
  appId: "1:844349785856:web:7dded29e4536f1cd84d5e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth()
const provider = new GoogleAuthProvider();
export { db, auth, provider };