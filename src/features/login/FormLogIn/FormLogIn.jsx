import {
  auth,
  createAuthUserWithEmailAndPassword,
  signOutUser,
  onAuthStateChangedListener,
} from "../../../utils/firebase/firebase";
import { useState } from "react";
import { useEffect } from "react";
import {
  sendEmailVerification,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

function FormLogIn() {
  // const [isVerified, setIsVerified] = useState(false);
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");
  // const signup = async () => {
  //   try {
  //     const { user } = await createAuthUserWithEmailAndPassword(
  //       email,
  //       password
  //     );
  //     sendEmailVerification(user);
  //     alert("Email sent");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const signin = async () => {
  //   try {
  //     const { user } = await signInWithEmailAndPassword(auth, email, password);
  //     console.log(user);
  //     if (user.emailVerified) {
  //       setIsVerified(true);
  //     } else setIsVerified(false);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // return (
  //   <div className="App">
  //     <br />
  //     <br />
  //     {isVerified ? (
  //       <p>Email address is verified</p>
  //     ) : (
  //       <p>Email address is not verified</p>
  //     )}
  //     <input
  //       type="email"
  //       placeholder="Email"
  //       onChange={(e) => {
  //         setemail(e.target.value);
  //       }}
  //     ></input>
  //     <br />
  //     <br />
  //     <input
  //       type="password"
  //       placeholder="password"
  //       onChange={(e) => {
  //         setpassword(e.target.value);
  //       }}
  //     ></input>
  //     <br />
  //     <br />
  //     <button onClick={signup}>Sign-up</button>
  //     <input
  //       type="email"
  //       placeholder="Email"
  //       onChange={(e) => {
  //         setemail(e.target.value);
  //       }}
  //     ></input>
  //     <br />
  //     <br />
  //     <input
  //       type="password"
  //       placeholder="password"
  //       onChange={(e) => {
  //         setpassword(e.target.value);
  //       }}
  //     ></input>
  //     <br />
  //     <br />
  //     <button onClick={signin}>Sign-In</button>
  //   </div>
  // );
}

export default FormLogIn;
