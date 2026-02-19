
// Import Firebase core
import { initializeApp } from "firebase/app";

// ✅ IMPORTANT: Import Firestore properly
import { getFirestore } from "firebase/firestore";

import { getAuth, signInAnonymously } from "firebase/auth";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH00fFVplkgPjVkdKaUg8cJP5jPsyyb74",
  authDomain: "srl-counter.firebaseapp.com",
  projectId: "srl-counter",
  storageBucket: "srl-counter.firebasestorage.app",
  messagingSenderId: "854720573341",
  appId: "1:854720573341:web:23c328736a89a69fe80974",
  measurementId: "G-LY0MZ2N2YZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Services
export const db = getFirestore(app);
export const auth = getAuth(app);
export { signInAnonymously };
