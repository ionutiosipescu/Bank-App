import { initializeApp } from "firebase/app";
import "firebase/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  onAuthStateChanged,
  PhoneAuthProvider,
  verifyPhoneNumber,
  signInWithCredential,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlqgE8UlYvj_q2KacaMjqm4NfmZFk8TW8",
  authDomain: "bank-app-de6c4.firebaseapp.com",
  projectId: "bank-app-de6c4",
  storageBucket: "bank-app-de6c4.appspot.com",
  messagingSenderId: "435731263630",
  appId: "1:435731263630:web:c1ac5fac79d68db2fcd9df",
};
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
