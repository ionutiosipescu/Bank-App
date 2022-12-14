import React from "react";
import { Fragment } from "react";
import { selectRegisterPlan } from "../../../../state-management/registerUser/registerUser.selector";
import { selectRegisterUser } from "../../../../state-management/registerhelper/registerhelper.selector";
import FooterControl from "../../FooterControl/FooterControl";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectStep } from "../../../../state-management/registerhelper/registerhelper.selector";
import CustomCheckbox from "../../../../components/CustomInputs/CustomCheckbox";
import { registerShemaConfirmation } from "../../ValidationSchema/ValidationSchema";
import { selectRegisterData } from "../../../../state-management/registerUser/registerUser.selector";
import { RegisterFormPart } from "../../FormRegister/FormRegister.style";
import {
  ConfirmFormPart,
  FormContainerConfirm,
  FormDetails,
  FormBox,
} from "./Confirm.style";
import { upperCaseFirstInitial } from "../../../../utils/helpers/helperFunctions/upperCaseFirstInitial";
import { generateRandomKey } from "../../../../utils/helpers/helperFunctions/randomKey";
import { fetchRegisterData } from "../../../../state-management/registerUser/registerUser.service";

function ConfirmForm() {
  const dispatch = useDispatch();
  const step = useSelector(selectStep);
  const RegisterData = useSelector(selectRegisterData);
  const array = RegisterData.account;
  const mappedArray = array.map(({ currency, type_of_plan }) => ({
    currency,
    type_of_plan,
  }));
  const { email, username } = RegisterData;
  const { address, birthday, country, first_name, gender, last_name, mobile } =
    RegisterData.userDetail;

  const initialObject = {
    acceptedTos: false,
    acceptedPlan: false,
  };

  const handleSubmit = () => {
    console.log(RegisterData);
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
        <FormContainerConfirm>
          <h1>Confirmation</h1>
          <FormDetails>
            <FormBox>
              <h3>Account Details:</h3>
              <ul>
                <li>Address: {address}</li>
                <li>Country: {upperCaseFirstInitial(country)}</li>
                <li>First Name: {upperCaseFirstInitial(first_name)}</li>
                <li>Second Name: {upperCaseFirstInitial(last_name)}</li>
                <li>Gender: {upperCaseFirstInitial(gender)}</li>
                <li>Email: {email}</li>
                <li>Mobile Number: {mobile}</li>
                <li>Account Name: {upperCaseFirstInitial(username)}</li>
                <li>Birthdaty: {birthday}</li>
              </ul>
            </FormBox>
            <FormBox>
              <h3>Plan Details:</h3>
              <ul>
                {Object.entries(mappedArray).map((key) => {
                  const keyFirst = generateRandomKey();
                  return (
                    <Fragment key={keyFirst}>
                      {Object.entries(key[1]).map((newKey) => {
                        const keySecond = generateRandomKey();
                        return (
                          <li key={keySecond}>
                            {upperCaseFirstInitial(newKey[0])}:{" "}
                            {upperCaseFirstInitial(newKey[1])}
                          </li>
                        );
                      })}
                    </Fragment>
                  );
                })}
              </ul>
            </FormBox>
          </FormDetails>
          <ConfirmFormPart>
            <CustomCheckbox
              label="I accept the terms and conditions"
              type="checkbox"
              name="acceptedTos"
            />
            <CustomCheckbox
              label="I confirm the presented details"
              type="checkbox"
              name="acceptedPlan"
            />
          </ConfirmFormPart>
          <FooterControl />
        </FormContainerConfirm>
      </Formik>
    </>
  );
}

export default ConfirmForm;
