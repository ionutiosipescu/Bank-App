import React, { useState, useEffect } from "react";
import {
  MainConfirmOTPWrapper,
  ConfirmOTPContainer,
  ConfirmContainer,
} from "./OtpPage.style";
import FooterRegister from "../../register/FooterRegister/FooterRegister";
import Spinner from "../../../components/Spinner/Spinner";
import { selectIsLoading } from "../../../state-management/Auth/register/register.selector";
import { useSelector } from "react-redux";
import OtpConfirmModal from "../modal/OtpConfirmModal";
import {
  selectIsSubmitingOtp,
  selectShowMessageOtp,
  selectNavigatePage,
} from "../../../state-management/Auth/register/register.selector";
import { useNavigate } from "react-router-dom";

function OtpPage() {
  const isLoading = useSelector(selectIsLoading);
  const navigatePage = useSelector(selectNavigatePage);
  const navigate = useNavigate();

  useEffect(() => {
    if (navigatePage) {
      navigate("/confirm-mail");
    } else {
      return;
    }
  }, [navigatePage]);
  return (
    <div>
      <ConfirmOTPContainer>
        <MainConfirmOTPWrapper>
          {isLoading ? (
            <Spinner />
          ) : (
            <ConfirmContainer>
              <OtpConfirmModal />
              <FooterRegister />
            </ConfirmContainer>
          )}
        </MainConfirmOTPWrapper>
      </ConfirmOTPContainer>
    </div>
  );
}

export default OtpPage;
