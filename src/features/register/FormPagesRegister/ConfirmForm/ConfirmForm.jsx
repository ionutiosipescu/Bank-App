import React from "react";
import "./ConfirmForm.css";
import { Fragment } from "react";
import { selectRegisterPlan } from "../../../../state-management/registerUser/registerUser.selector";
// import { selectRegisterUser } from "../../../../state-management/registerUser/registerUser.selector";
import { selectRegisterUser } from "../../../../state-management/registerhelper/registerhelper.selector";
import FooterControl from "../../FooterControl/FooterControl";
import { Form, Formik } from "formik";
// import { handleSubmit } from "../../../../utils/helpers/register/HandleSubmit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectStep } from "../../../../state-management/registerhelper/registerhelper.selector";
import { setStep } from "../../../../state-management/registerhelper/registerhelper.actions";
import CustomCheckbox from "../../../../components/CustomInputs/CustomCheckbox";
import { registerShemaConfirmation } from "../../ValidationSchema/ValidationSchema";
import { selectRegisterData } from "../../../../state-management/registerUser/registerUser.selector";
import { fetchRegisterData } from "../../../../state-management/registerUser/registerUser.action";

function ConfirmForm() {
  const dispatch = useDispatch();
  const step = useSelector(selectStep);
  const RegisterUser = useSelector(selectRegisterUser);
  const RegisterPlan = useSelector(selectRegisterPlan);
  const RegisterData = useSelector(selectRegisterData);
  const initialObject = {
    acceptedTos: false,
  };

  const handleSubmit = () => {
    dispatch(
      fetchRegisterData(
        "http://localhost:8080/bank/auth/signup",
        RegisterData,
        step
      )
    );
  };
  return (
    <>
      <Formik
        initialValues={{ ...initialObject }}
        validationSchema={registerShemaConfirmation}
        onSubmit={handleSubmit}
      >
        <Form className="personal-form">
          <h1>Confirm Form</h1>
          <div className="box">
            {/* user */}
            <div>
              <h3>User Details:</h3>
              <ul>
                {Object.entries(RegisterUser).map((key) => {
                  const randomKey = Math.random().toString(36).slice(2);
                  return (
                    <li key={randomKey}>
                      {key[0]}: --- {key[1]}
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* plan */}
            <div>
              <h3>Plan Details:</h3>
              <ul>
                {Object.entries(RegisterPlan).map((key) => {
                  const randomKey = Math.random().toString(36).slice(2);
                  return (
                    <Fragment key={randomKey}>
                      {Object.entries(key[1]).map((newKey) => {
                        const randomKeyNew = Math.random()
                          .toString(36)
                          .slice(2);
                        return (
                          <li key={randomKeyNew}>
                            {newKey[0]}: --- {newKey[1]}
                          </li>
                        );
                      })}
                    </Fragment>
                  );
                })}
              </ul>
            </div>
          </div>
          <CustomCheckbox type="checkbox" name="acceptedTos" />
          <FooterControl />
        </Form>
      </Formik>
    </>
  );
}

export default ConfirmForm;
