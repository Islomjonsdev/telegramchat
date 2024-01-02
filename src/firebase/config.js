import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSf3UwFuElE9cmz-C4zlobv2-SfyDVwSU",
  authDomain: "telegramchat-fbb42.firebaseapp.com",
  projectId: "telegramchat-fbb42",
  storageBucket: "telegramchat-fbb42.appspot.com",
  messagingSenderId: "20229493589",
  appId: "1:20229493589:web:57cf432274be45b6a255dc",
  measurementId: "G-GV77Y1FP2R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export { auth, googleProvider }