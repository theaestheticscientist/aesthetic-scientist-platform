import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAl42W1iVp8WM5DL5Gwzc0M8OlVNPoyoGQ",
  authDomain: "the-aesthetic-scientist-app.firebaseapp.com",
  projectId: "the-aesthetic-scientist-app",
  storageBucket: "the-aesthetic-scientist-app.firebasestorage.app",
  messagingSenderId: "158790262352",
  appId: "1:158790262352:web:db42cd1ee81152aeddbb55",
  measurementId: "G-8V4KSQEW32"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
