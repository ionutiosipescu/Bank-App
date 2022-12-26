import React from "react";
import {
  RegitsterFormContainer,
  RegisterFormWrapper,
} from "./FormRegister.style";
import { useState } from "react";
import AccountForm from "../FormPagesRegister/AccountForm/AccountForm";
import PersonalForm from "../FormPagesRegister/PersonalForm/PersonalForm";
import PlanForm from "../FormPagesRegister/PlanForm/PlanForm";
import ConfirmForm from "../FormPagesRegister/ConfirmForm/ConfirmForm";
import { Form, Formik } from "formik";
import Step from "../Step/Step";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setStep } from "../../../state-management/registerUser/step/stepredux";
import { selectStep } from "../../../state-management/registerUser/step/stepredux";

function FormRegister() {
  const dispatch = useDispatch();
  const step = useSelector(selectStep);
  //   const date = new Date();
  //   const [checkedRo, setCheckedRo] = useState("");
  //   const [checkedEur, setCheckedEur] = useState("");
  //   const [page, setPage] = useState(0);
  //   const [userData, setUserData] = useState({
  //     userDataObj: {
  //       userProfile: {
  //         lastName: "",
  //         firstName: "",
  //         email: "",
  //         city: "",
  //         number: "",
  //         displayName: "",
  //         mobile: "",
  //         birthDate: "",
  //         gender: "",
  //         password: "",
  //         confirmPassword: "",
  //         createdAt: "",
  //       },
  //       userPlan: [],
  //     },
  //   });

  //   const values = {
  //     userData,
  //     setUserData,
  //     checkedRo,
  //     checkedEur,
  //     setCheckedRo,
  //     setCheckedEur,
  //   };

  //   const FormTitles = ["Personal", "Account", "Plan", "Confirmed"];

  //   const PageDisplay = () => {
  //     if (page === 0) {
  //       return <PersonalForm values={values} />;
  //     } else if (page === 1) {
  //       return <AccountForm values={values} />;
  //     } else if (page === 2) {
  //       return <PlanForm values={values} />;
  //     } else {
  //       return <ConfirmForm values={values} />;
  //     }
  //   };

  //   const handleSubmit = () => {
  //     console.log(userData);
  //   };

  return (
    <>
      <h1>Register</h1>
      <RegitsterFormContainer>
        <RegisterFormWrapper>
          <Step />
          {/* <form action="" className="register_form">
            <div className="form-container">
              <div className="header">
                <h1>{FormTitles[page]}</h1>
              </div>
              <div className="body">{PageDisplay()}</div> */}
          <div className="footer">
            <button
              disabled={step == 0}
              onClick={(e) => {
                e.preventDefault();

                dispatch(setStep(step - 1));
              }}
            >
              Prev
            </button>
            <button
              onClick={() => {
                dispatch(setStep(step + 1));
              }}
            >
              Next
            </button>
          </div>
          {/* </div>
          </form> */}
        </RegisterFormWrapper>
      </RegitsterFormContainer>
    </>
  );
}

export default FormRegister;
