import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyBH-rFbAxNifCFIAR7YbA9V-qpA1_zYAA4",
  authDomain: "cloth-shop-7c77b.firebaseapp.com",
  projectId: "cloth-shop-7c77b",
  storageBucket: "cloth-shop-7c77b.appspot.com",
  messagingSenderId: "231470973838",
  appId: "1:231470973838:web:84ec80eb63c26cc6db9adf",
  measurementId: "G-JWW7BGCCDB",
};

const app = initializeApp(config);

export const auth = getAuth();
// export const firestore = app.firestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;
