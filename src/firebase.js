// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// import { addDoc, collection } from "firebase/firestore/lite";
import { addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1io9v4hWGTzstcUGiEbr96A8Oc2cbCAQ",
  authDomain: "netflix-clone-80e32.firebaseapp.com",
  projectId: "netflix-clone-80e32",
  storageBucket: "netflix-clone-80e32.firebasestorage.app",
  messagingSenderId: "33240326522",
  appId: "1:33240326522:web:9f73c5ccc49f2817d276c3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      email,
      authProvider: "local",
    });
  } catch (error) {
    console.error("Error signing up:", error);
    alert(error);
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  }catch (error) {
    console.error("Error logging in:", error);
    alert(error);
  }
}

const logout = () => {
  signOut(auth);
}

export { auth, db, signup, login, logout };