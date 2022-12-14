import React from "react";
import {
  RegitsterFormContainer,
  RegisterFormWrapper,
} from "./FormRegister.style";
import { useState } from "react";
import AccountForm from "../form_pages_register/AccountForm/AccountForm";
import PersonalForm from "../form_pages_register/PersonalForm/PersonalForm";
import PlanForm from "../form_pages_register/PlanForm/PlanForm";
import ConfirmForm from "../form_pages_register/ConfirmForm/ConfirmForm";

function FormRegister() {
  const [checkedRo, setCheckedRo] = useState(false);
  const [checkedEur, setCheckedEur] = useState(false);
  const [page, setPage] = useState(0);
  const [formFields, setFormFields] = useState({
    lastName: "",
    firstName: "",
    email: "",
    city: "",
    number: "",
    displayName: "",
    mobile: "",
    birthDate: "",
    gender: "",
    password: "",
    confirmPassword: "",
    typeOfPlan: "",
    currencyRon: checkedRo,
    currencyEuro: checkedEur,
  });

  const values = {
    formFields,
    setFormFields,
    checkedRo,
    checkedEur,
    setCheckedRo,
    setCheckedEur,
  };

  const FormTitles = ["Personal", "Account", "Plan", "Confirmed"];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalForm values={values} />;
    } else if (page === 1) {
      return <AccountForm values={values} />;
    } else if (page === 2) {
      return <PlanForm values={values} />;
    } else {
      return <ConfirmForm values={values} />;
    }
  };

  const handleSubmit = () => {
    console.log(formFields);
  };

  return (
    <>
      <h1>Register</h1>
      <RegitsterFormContainer>
        <RegisterFormWrapper>
          <form action="" className="register_form">
            <div className="form-container">
              <div className="header">
                <h1>{FormTitles[page]}</h1>
              </div>
              <div className="body">{PageDisplay()}</div>
              <div className="footer">
                <button
                  disabled={page == 0}
                  onClick={(e) => {
                    e.preventDefault();

                    setPage((currPage) => currPage - 1);
                  }}
                >
                  Prev
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (page === FormTitles.length - 1) {
                      alert("FORM SUBMITTED");
                      handleSubmit();
                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }}
                >
                  {page === FormTitles.length - 1 ? "Submit" : "Next"}
                </button>
              </div>
            </div>
          </form>
        </RegisterFormWrapper>
      </RegitsterFormContainer>
    </>
  );
}

export default FormRegister;
