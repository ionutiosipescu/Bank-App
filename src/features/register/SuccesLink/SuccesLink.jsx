import React from "react";
import { Link } from "react-router-dom";
import {
  SuccesLinkContainer,
  SuccesLinkBtn,
  SuccesLinkTitle,
  SuccesLinkBox,
} from "./SuccesLink.style";

function SuccesLink() {
  return (
    <SuccesLinkContainer>
      <SuccesLinkTitle>
        <h5>You can now Log In to your Account</h5>
      </SuccesLinkTitle>
      <SuccesLinkBtn>
        <Link to="/login">Log In Page</Link>
      </SuccesLinkBtn>
    </SuccesLinkContainer>
  );
}

export default SuccesLink;
