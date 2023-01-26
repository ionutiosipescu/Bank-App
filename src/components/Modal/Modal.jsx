import React, { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import { ModalCard, ModalContainer, ModalWrapper } from "./Modal.style";

function Modal({ children, handleClick, opened, ...props }) {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleClick();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <ModalWrapper
      opened={opened}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <ModalCard>
        <ModalContainer>
          {children}
          <Button primary="primary" size="round" handleClick={handleClick}>
            X
          </Button>
        </ModalContainer>
      </ModalCard>
    </ModalWrapper>
  );
}

export default Modal;