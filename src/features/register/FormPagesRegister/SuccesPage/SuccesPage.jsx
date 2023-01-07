import React from "react";
import { SuccesTitle } from "./SuccesPage.style";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

function SuccesPage() {
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
    <SuccesTitle>
      <Confetti width={width} height={height} recycle={false} />
      <h1>Your Account has been created</h1>
      <h3>Congratulation!</h3>
    </SuccesTitle>
  );
}

export default SuccesPage;
