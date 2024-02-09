// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW8AlKqetB-B9XxLji1r83rJDtsdApOpk",
  authDomain: "visishta-e282c.firebaseapp.com",
  projectId: "visishta-e282c",
  storageBucket: "visishta-e282c.appspot.com",
  messagingSenderId: "239912210387",
  appId: "1:239912210387:web:8e28fee643df60f55ae926"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
