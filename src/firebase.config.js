// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8QY0Al_ieG96PggL-FlJ5GvoYkcJq4H8",
  authDomain: "house-marketplace-app-8d29a.firebaseapp.com",
  projectId: "house-marketplace-app-8d29a",
  storageBucket: "house-marketplace-app-8d29a.appspot.com",
  messagingSenderId: "1062916347895",
  appId: "1:1062916347895:web:f697d6854f974fdd92c0f2"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
export const db = getFirestore()