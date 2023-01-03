import React from "react";
import { useField } from "formik";
import { useFormikContext } from "formik";

function SubmitBtn() {
  const [{ isSubmitting }, { isValid }] = useFormikContext();

  return (
    <button type="submit" disabled={isSubmitting || !isValid}>
      Submit
    </button>
  );
}

export default SubmitBtn;
