import React from "react";
import { SuccesTitle } from "./SuccesPage.style";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import { selectIsLoading } from "../../../../state-management/Auth/registerhelper/registerhelper.selector";
import { useSelector } from "react-redux";
import Spinner from "../../../../components/Spinner/Spinner";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectEmailCode } from "../../../../state-management/Auth/registerhelper/registerhelper.selector";

function SuccesPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
  const EmailCode = useSelector(selectEmailCode);
  const [seconds, setSeconds] = useState(10);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // After 10 seconds redirect the user
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, []);

  // Decrement after each second the second variable
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  return (
    <React.Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <SuccesTitle>
          <Confetti width={width} height={height} recycle={false} />
          <h1>Your Account has been created</h1>
          <h3>Congratulation!</h3>
          <p>You will be redirected to the LogIn Page in {seconds}</p>
        </SuccesTitle>
      )}
    </React.Fragment>
  );
}

export default SuccesPage;
