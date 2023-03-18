import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MessageContainer } from "./StatusMessage.style";
import { FC } from "react";
import { ButtonHTMLAttributes } from "react";
import { Size } from "../Button/Button";

export enum TypeMessages {
  success = "success",
  error = "error",
  warning = "warning",
  info = "info",
  default = "default",
}

export enum StatusMessageSizes {
  fit = "fit",
  half = "half",
  full = "full",
  xl = "xl",
}

type StatusMessageProps = {
  type?: TypeMessages;
  text?: string | undefined;
  size?: StatusMessageSizes;
  handleShow?: () => void;
  show: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const StatusMessage: FC<StatusMessageProps> = ({ ...props }) => {
  const { type, text, size, handleShow, show } = props;

  const [showMessage, setShowMessage] = useState(true);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHiding(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, [show]);

  useEffect(() => {
    if (!isHiding) return;

    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [isHiding]);

  return (
    <>
      {showMessage ? (
        <MessageContainer type={type} size={size} hide={isHiding}>
          <h3>{`${text}`?.charAt(0)?.toUpperCase() + text?.slice(1)}</h3>
        </MessageContainer>
      ) : null}
    </>
  );
};
export default StatusMessage;
