import React from "react";
import { useState, useEffect } from "react";
import { auth } from "../../../utils/firebase/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { setUpRecaptha, verifyOTP } from "../../../utils/firebase/firebase";

function FormLoginPhone() {
  const phoneNumber = "+40757289364";
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(phoneNumber);
    if (phoneNumber === "" || phoneNumber === undefined)
      console.log("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(phoneNumber);
      setResult(response);
    } catch (err) {
      console.log(err);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    if (otp === "" || otp === null) return;
    try {
      const { user } = await result.confirm(otp);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Firebase Phone Auth</h2>
      <form onSubmit={getOtp}>
        <button type="submit">Send Otp</button>
        <div>
          <div id="recaptcha-container"></div>
        </div>
      </form>

      <form onSubmit={verifyOtp}>
        <div>
          <input
            type="otp"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <button type="submit">Verify</button>
      </form>
    </div>
  );
}

export default FormLoginPhone;
