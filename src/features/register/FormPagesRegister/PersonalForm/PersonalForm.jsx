import React from "react";
import { RegisterFormPart } from "../../FormRegister/FormRegister.style";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { registerSchemaPersonal } from "../../ValidationSchema/ValidationSchema";
import CustomInput from "../../../../components/CustomInputs/CustomInput";
import CustomSelect from "../../../../components/CustomInputs/CustomSelect";
import RadioButtons from "../../../../components/CustomInputs/CustomRadioInputGroup";
import FooterControl from "../../FooterControl/FooterControl";
import DatePickerField from "../../../../components/CustomInputs/CustomDatePicker";
import { FormContainerPersonal } from "./PersonalForm.style";
import { handleSubmit } from "../../../../utils/helpers/helperFunctions/HandleSubmit";
import { selectRegisterUser } from "../../../../state-management/Auth/registerhelper/registerhelper.selector";
import { setRegisterUser } from "../../../../state-management/Auth/registerhelper/registerhelper.actions";
import { selectStep } from "../../../../state-management/Auth/registerhelper/registerhelper.selector";
import { setStep } from "../../../../state-management/Auth/registerhelper/registerhelper.actions";

function PersonalForm() {
  const step = useSelector(selectStep);
  const options = [
    { key: "Male", value: "male" },
    { key: "Female", value: "female" },
  ];
  const countries = [
    { key: "", value: "Select a country" },
    { key: "romania", value: "Romania" },
    { key: "italia", value: "Italia" },
    { key: "spania", value: "Spania" },
    { key: "germania", value: "Germania" },
  ];
  const dispatch = useDispatch();
  const registerData = useSelector(selectRegisterUser);
  const { firstname, lastname, country, address } = registerData; // destructure data from Redux for updating on every keypress

  const setData = (e) => {
    dispatch(setRegisterUser(registerData, e));
  };

  return (
    <>
      <Formik
        initialValues={{ ...registerData }}
        validationSchema={registerSchemaPersonal}
        onSubmit={() => handleSubmit(dispatch, setStep, step)}
      >
        <FormContainerPersonal>
          <RegisterFormPart>
            <CustomInput
              label="Firstname"
              name="firstname"
              type="text"
              tall
              placeholder="Enter your firstname"
              setData={setData}
              value={firstname || ""}
            />
            <CustomInput
              label="Lastname"
              name="lastname"
              type="text"
              tall
              placeholder="Enter your lastname"
              setData={setData}
              value={lastname || ""}
            />
          </RegisterFormPart>
          <RegisterFormPart>
            <CustomSelect
              label="Country"
              name="country"
              placeholder="Select a country"
              tall
              setData={setData}
              value={country || ""}
            >
              {countries.map((option, index) => (
                <option value={option.key} key={index}>
                  {option.value}
                </option>
              ))}
            </CustomSelect>
            <CustomInput
              label="Address"
              name="address"
              type="text"
              tall
              placeholder="Enter your address"
              setData={setData}
              value={address || ""}
            />
          </RegisterFormPart>
          <RegisterFormPart>
            <RadioButtons
              radio
              type="radio"
              label="Gender"
              name="gender"
              options={options}
              setData={setData}
            />
            <DatePickerField label="Date" name="date" setData={setData} tall />
          </RegisterFormPart>
          <FooterControl />
        </FormContainerPersonal>
      </Formik>
    </>
  );
}

export default PersonalForm;
