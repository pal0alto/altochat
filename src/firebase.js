import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvhMfDvjIWhINMWd72JUL3lFhkkIzV_Ik",
  authDomain: "chatapp-react-44f56.firebaseapp.com",
  projectId: "chatapp-react-44f56",
  storageBucket: "chatapp-react-44f56.appspot.com",
  messagingSenderId: "987525337720",
  appId: "1:987525337720:web:573175fec9bbda40add38d"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()