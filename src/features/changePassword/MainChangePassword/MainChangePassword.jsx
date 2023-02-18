import React from "react";
import {
  LogInContainer,
  LogInWrapper,
  Logo,
  LogoText,
} from "../../login/MainLogIn/MainLogIn.style";
import FooterLogIn from "../../login/FooterLogIn/FooterLogIn";
import HeroLogIn from "../../login/HeroLogIn/HeroLogIn";
import logo from "../../../assets/images/logo.png";
import FromChangePassword from "../FormChangePassword/FromChangePassword";
import { ChangeContainer } from "./MainChangePassword.style";
import FooterRegister from "../../register/FooterRegister/FooterRegister";
import { BoxControler } from "./MainChangePassword.style";
import Modal from "../../../components/Modal/Modal";
import OTPModal from "../../../components/OTPModal/OTPModal";
import { useState } from "react";
import Button from "../../../components/UI/Button/Button";

function MainChangePassword() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = () => {
    setModalOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <LogInWrapper>
      <HeroLogIn />
      <ChangeContainer>
        <BoxControler>
          <Logo src={logo} />
          <LogoText>The only place for all your finances!</LogoText>
        </BoxControler>
        <FromChangePassword />
        <BoxControler>
          <FooterLogIn />
          <FooterRegister passChange={"passChange"} />
        </BoxControler>
        <Button size="sm" label="OTP" onClick={handleModalOpen} />
      </ChangeContainer>
      <Modal opened={modalOpen} handleClick={handleModalClose} closeBtn>
        <OTPModal
          handleModalClose={handleModalClose}
          handleSubmit={handleSubmit}
        />
      </Modal>
    </LogInWrapper>
  );
}

export default MainChangePassword;
