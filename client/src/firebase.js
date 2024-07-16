// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "blog-mern-b35d9.firebaseapp.com",
  projectId: "blog-mern-b35d9",
  storageBucket: "blog-mern-b35d9.appspot.com",
  messagingSenderId: "610193844810",
  appId: "1:610193844810:web:54f71cbc5dfe06e54714b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);