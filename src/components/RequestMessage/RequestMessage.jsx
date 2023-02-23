import React from "react";
import Spinner from "../Spinner/Spinner";
import StatusMessage from "../UI/StatusMessage/StatusMessage";

function RequestMessage({ ...props }) {
  const { isSubmiting, showMessage, errorMsgRequest, text } = props;
  return (
    <>
      {isSubmiting ? (
        <Spinner size={"fit"} />
      ) : showMessage ? (
        <StatusMessage
          type={errorMsgRequest ? "error" : "success"}
          text={errorMsgRequest ? errorMsgRequest : text}
          size="full"
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default RequestMessage;
