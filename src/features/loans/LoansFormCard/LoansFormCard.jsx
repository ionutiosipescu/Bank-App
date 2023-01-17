import React from "react";
import { ServiceCard } from "../../../components/UI/Card/Card.style";
import { CardHeader } from "../../../components/UI/Card/Card.style";
import { Formik } from "formik";
import CustomInput from "../../../components/CustomInputs/CustomInput";
import Button from "../../../components/UI/Button/Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectLoansData } from "../../../state-management/Dashboard/services/loans/loans.selector";
import { loansSchema } from "../ValidationSchema/ValidationSchema";

function LoansFormCard() {
  const dispatch = useDispatch;
  const loansData = useSelector(selectLoansData);
  // send data to Redux userProfile
  const setData = (e) => {};

  const initialObj = {
    serie: "",
  };
  return (
    <ServiceCard>
      <CardHeader>
        <h2>Loans</h2>
      </CardHeader>
      <Formik
        initialValues={{ ...initialObj }}
        validationSchema={loansSchema}
        // onSubmit={onSubmit}
      >
        <div>
          <CustomInput
            label="Identity Card Serie"
            name="serie"
            type="text"
            placeholder="Enter your serie"
            setData={setData}
          />
          {/* {errorMsg ? <ErrorMsg>{errorMsg}</ErrorMsg> : <></>} */}
          {/* <Button size="100" typeclass="secondary" type="submit">
            Log In
          </Button> */}
        </div>
      </Formik>
    </ServiceCard>
  );
}

export default LoansFormCard;
