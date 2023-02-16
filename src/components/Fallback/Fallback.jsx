import React from "react";
import { TitleFallback, TitleContainer } from "./Fallback.style";

function Fallback({ ...props }) {
  const { text } = props;
  console.log(text);
  return (
    <TitleContainer>
      <TitleFallback>{text}</TitleFallback>
    </TitleContainer>
  );
}

export default Fallback;
