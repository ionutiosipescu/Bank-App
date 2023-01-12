import React from "react";
import { SuccesTitle } from "./SuccesPage.style";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import { selectIsLoading } from "../../../../state-management/Auth/registerhelper/registerhelper.selector";
import { useSelector } from "react-redux";
import Spinner from "../../../../components/Spinner/Spinner";

function SuccesPage() {
  const isLoading = useSelector(selectIsLoading);
  // const [width, setWidth] = useState(window.innerWidth);
  // const [height, setHeight] = useState(window.innerHeight);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWidth(window.innerWidth);
  //     setHeight(window.innerHeight);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);
  return (
    <React.Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <SuccesTitle>
          {/* <Confetti width={width} height={height} recycle={false} /> */}
          <h1>Your Account has been created</h1>
          <h3>Congratulation!</h3>
        </SuccesTitle>
      )}
    </React.Fragment>
  );
}

export default SuccesPage;
