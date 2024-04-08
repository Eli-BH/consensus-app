// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBba__z69GdhTEY5uFyscba_qyfHKKzGQc",
  authDomain: "consensus-app-e1e44.firebaseapp.com",
  projectId: "consensus-app-e1e44",
  storageBucket: "consensus-app-e1e44.appspot.com",
  messagingSenderId: "456285782705",
  appId: "1:456285782705:web:e4f4f74fd60325964e9890",
  measurementId: "G-MH7W1E4YX7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
