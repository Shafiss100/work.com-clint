// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOcQFqodNftHr_ftA1J5b096sjn7dB-2I",
  authDomain: "workdotcom-83917.firebaseapp.com",
  projectId: "workdotcom-83917",
  storageBucket: "workdotcom-83917.appspot.com",
  messagingSenderId: "980990733939",
  appId: "1:980990733939:web:a85a613c20dfa5c194c406",
  measurementId: "G-KPXPLPYE9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;