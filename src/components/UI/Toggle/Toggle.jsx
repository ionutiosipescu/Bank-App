import React from "react";
import RadioButton from "../../RadioButton/RadioButton";

const Toggle = () => {
  const setData = (data) => {
    console.log(data);
  };

  return <RadioButton firstText="EUR" secondText="RON" setData={setData} />;
};

export default Toggle;
