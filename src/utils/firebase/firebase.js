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

// EMAIL

// const firebaseConfig = {
//   apiKey: "AIzaSyDlqgE8UlYvj_q2KacaMjqm4NfmZFk8TW8",
//   authDomain: "bank-app-de6c4.firebaseapp.com",
//   projectId: "bank-app-de6c4",
//   storageBucket: "bank-app-de6c4.appspot.com",
//   messagingSenderId: "435731263630",
//   appId: "1:435731263630:web:c1ac5fac79d68db2fcd9df",
// };
// const firebaseApp = initializeApp(firebaseConfig);
// export const auth = getAuth();

// export const createAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;

//   return await createUserWithEmailAndPassword(auth, email, password);
// };

// export const signOutUser = async () => await signOut(auth);

// export const onAuthStateChangedListener = (callback) => {
//   return onAuthStateChanged(auth, callback);
// };

// export const sendVerificationCode = async (phoneNumber, appVerifier) => {
//   try {
//     return await phoneProvider.verifyPhoneNumber(
//       phoneNumber,
//       appVerifier,
//       true
//     );
//   } catch (error) {
//     throw error;
//   }
// };

// SMS

const firebaseConfig = {
  apiKey: "AIzaSyDlqgE8UlYvj_q2KacaMjqm4NfmZFk8TW8",
  authDomain: "bank-app-de6c4.firebaseapp.com",
  projectId: "bank-app-de6c4",
  storageBucket: "bank-app-de6c4.appspot.com",
  messagingSenderId: "435731263630",
  appId: "1:435731263630:web:c1ac5fac79d68db2fcd9df",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

export const setUpRecaptha = (number) => {
  const recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: (response) => {},
    },
    auth
  );
  recaptchaVerifier.render();
  return signInWithPhoneNumber(auth, number, recaptchaVerifier);
};

// firebase config

// apiKey: "AIzaSyDlqgE8UlYvj_q2KacaMjqm4NfmZFk8TW8",
// authDomain: "bank-app-de6c4.firebaseapp.com",
// projectId: "bank-app-de6c4",
// storageBucket: "bank-app-de6c4.appspot.com",
// messagingSenderId: "435731263630",
// appId: "1:435731263630:web:c1ac5fac79d68db2fcd9df",
