import React from "react";
import { Fragment } from "react";
import FooterControl from "../../FooterControl/FooterControl";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CustomCheckbox from "../../../../components/CustomInputs/CustomCheckbox";
import { registerShemaConfirmation } from "../../ValidationSchema/ValidationSchema";
import { RegisterFormPart } from "../../FormRegister/FormRegister.style";
import {
  ConfirmFormPart,
  FormContainerConfirm,
  FormDetails,
  FormBox,
} from "./Confirm.style";
import { useNavigate } from "react-router-dom";
import { upperCaseFirstInitial } from "../../../../utils/helpers/helperFunctions/upperCaseFirstInitial";
import { generateRandomKey } from "../../../../utils/helpers/helperFunctions/randomKey";
import { ErrorMsg } from "../../../../components/Errors/Auth/ErrorMsg.style";
import { selectStep } from "../../../../state-management/Auth/register/register.selector";
import { selectRegisterData } from "../../../../state-management/Auth/register/register.selector";
import { selectRegisterFailed } from "../../../../state-management/Auth/register/register.selector";
// import { fetchRegisterData } from "../../../../state-management/Auth/register/register.service";
import { fetchRegisterMail } from "../../../../state-management/Auth/register/register.service";
import { selectCsrf } from "../../../../state-management/Auth/login/login.selector";

function ConfirmForm() {
  const errorMsg = useSelector(selectRegisterFailed);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const csrf = useSelector(selectCsrf);
  const step = useSelector(selectStep);
  const RegisterData = useSelector(selectRegisterData);
  const array = RegisterData?.account;
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
    console.log(errorMsg);
    dispatch(fetchRegisterMail(RegisterData, step, csrf));
    navigate("/confirm-otp");
  };
  const setCardCheckbox = (e) => {
    console.log(e);
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
                <li>
                  <span>Username:</span> {upperCaseFirstInitial(username)}
                </li>
                <li>
                  <span>First Name:</span> {upperCaseFirstInitial(first_name)}
                </li>
                <li>
                  <span>Second Name:</span> {upperCaseFirstInitial(last_name)}
                </li>

                <li>
                  <span>Email:</span> {email}
                </li>
                <li>
                  <span>Mobile Number:</span> {mobile}
                </li>
                <li>
                  <span>Address:</span> {address}
                </li>
                <li>
                  <span>Country: </span>
                  {upperCaseFirstInitial(country)}
                </li>
                <li>
                  <span>Gender:</span> {upperCaseFirstInitial(gender)}
                </li>
                <li>
                  <span>Birthday:</span> {birthday}
                </li>
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
                            <span>{upperCaseFirstInitial(newKey[0])}:</span>{" "}
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
              setCardCheckbox={setCardCheckbox}
            />
            <CustomCheckbox
              label="I confirm the presented details"
              type="checkbox"
              name="acceptedPlan"
              setCardCheckbox={setCardCheckbox}
            />
          </ConfirmFormPart>
          {errorMsg ? <ErrorMsg>{errorMsg}</ErrorMsg> : <></>}
          <FooterControl />
        </FormContainerConfirm>
      </Formik>
    </>
  );
}

export default ConfirmForm;
