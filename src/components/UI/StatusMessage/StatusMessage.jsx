import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MessageContainer } from "./StatusMessage.style";
import { PropTypes } from "prop-types";

function StatusMessage({ ...props }) {
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
      // handleShow();
    }, 300);

    return () => clearTimeout(timer);
  }, [isHiding]);

  return (
    showMessage && (
      <MessageContainer type={type} size={size} hide={isHiding}>
        <h3>{`${text}`.charAt(0).toUpperCase() + text.slice(1)}</h3>
      </MessageContainer>
    )
  );
}

StatusMessage.propTypes = {
  type: PropTypes.oneOf(["success", "error", "warning", "info", "default"]),
  text: PropTypes.string,
  size: PropTypes.oneOf(["fit", "half", "full", "xl"]),
};

export default StatusMessage;
