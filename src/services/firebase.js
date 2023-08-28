// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAyxUz_YGZ2ZneP6x-5y31aIR3s1Im1c5Y",
  authDomain: "dimedash-ca8cb.firebaseapp.com",
  projectId: "dimedash-ca8cb",
  storageBucket: "dimedash-ca8cb.appspot.com",
  messagingSenderId: "614380658109",
  appId: "1:614380658109:web:9629b849f1ce85401d06d4",
  measurementId: "G-KWJ1S2Z5WT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app
