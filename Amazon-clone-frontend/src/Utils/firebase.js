
import firebase from "firebase/compat/app";
//auth
 import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Your web app's Firebase configuration
const API_KEY = import.meta.env.VITE_API_KEY;
const firebaseConfig = {
  apiKey: `${API_KEY}`,
  authDomain: "clone-c3fb6.firebaseapp.com",
  projectId: "clone-c3fb6",
  storageBucket: "clone-c3fb6.appspot.com",
  messagingSenderId: "307114346676",
  appId: "1:307114346676:web:900a1b84ca4f3471ecafe1",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore();
