import React from "react";
import RadioButtons from "./CustomRadioInputGroup";

// this component is used only for radio buttons
function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "radio":
      return <RadioButtons {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
