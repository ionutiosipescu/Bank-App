import React from "react";
import "./Login.css";
import { LogInContainer } from "./LogIn.style";
import MainLogIn from "../../features/login/MainLogIn/MainLogIn";

function Login() {
  return (
    <LogInContainer>
      <MainLogIn />
    </LogInContainer>
  );
}

export default Login;
