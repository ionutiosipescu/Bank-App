import React from "react";
import { SuccesTitle } from "../../features/register/FormPagesRegister/SuccesPage/SuccesPage.style";
import { useEffect, useState } from "react";
import { selectIsLoading } from "../../state-management/Auth/registerhelper/registerhelper.selector";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import Confetti from "react-confetti";
import FooterRegister from "../../features/register/FooterRegister/FooterRegister";
import NewtonCandle from "../../components/NewtonCandle/NewtonCandle";
import { PasswordPageContainer } from "./ConfirmPassword.style";
import { PasswordContainer } from "./ConfirmPassword.style";
import { MainPasswordWrapper } from "./ConfirmPassword.style";

function ConfirmPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
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

  return (
    <PasswordPageContainer>
      <MainPasswordWrapper>
        {isLoading ? (
          <Spinner />
        ) : (
          <PasswordContainer>
            <SuccesTitle>
              <Confetti width={width} height={height} recycle={false} />
              <h1>Your Password has been succesfull changed</h1>
              <h3>Congratulation!</h3>
              <p>You will be redirected to the LogIn Page in {seconds}</p>
            </SuccesTitle>
            <NewtonCandle />
            <FooterRegister />
          </PasswordContainer>
        )}
      </MainPasswordWrapper>
    </PasswordPageContainer>
  );
}

export default ConfirmPassword;
