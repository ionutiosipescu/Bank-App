import React, { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import { ModalCard, ModalContainer, ModalWrapper } from "./Modal.style";

function Modal(props) {
  const { children, handleClick, opened, closeBtn } = props;

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
    <ModalWrapper opened={opened} onKeyDown={handleKeyDown}>
      <ModalCard>
        <ModalContainer>
          {children}
          {!closeBtn && (
            <Button
              primary="primary"
              size="round"
              type="button"
              onClick={handleClick}
            >
              X
            </Button>
          )}
        </ModalContainer>
      </ModalCard>
    </ModalWrapper>
  );
}

export default Modal;
