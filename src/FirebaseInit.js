// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth} from 'firebase/auth'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6VaS1ciK84VPApfGOiN9c15Diy2CNOpk",
  authDomain: "ema-john-simple-2de48.firebaseapp.com",
  projectId: "ema-john-simple-2de48",
  storageBucket: "ema-john-simple-2de48.appspot.com",
  messagingSenderId: "1009062964168",
  appId: "1:1009062964168:web:1b3e395f8c8c845b7daefd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;