// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXdIv8m0srZXaTPd6j4J4jEtB9o2iMxxs",
  authDomain: "walk-visa-consultancy.firebaseapp.com",
  projectId: "walk-visa-consultancy",
  storageBucket: "walk-visa-consultancy.appspot.com",
  messagingSenderId: "341394838829",
  appId: "1:341394838829:web:dabdb7726aa52828c32fa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;