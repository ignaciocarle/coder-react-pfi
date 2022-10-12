import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4GjGVQq_STh2SjRW5y9ub25aiYy_ZViY",
  authDomain: "punto-de-apoyo-ca046.firebaseapp.com",
  projectId: "punto-de-apoyo-ca046",
  storageBucket: "punto-de-apoyo-ca046.appspot.com",
  messagingSenderId: "1070714366756",
  appId: "1:1070714366756:web:51f01e8fe3c231668de1b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
