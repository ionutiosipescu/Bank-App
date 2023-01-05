import React from "react";
import { RegisterFormPart } from "../../FormRegister/FormRegister.style";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setRegisterUser } from "../../../../state-management/registerUser/registerUser.action";
import { selectRegisterUser } from "../../../../state-management/registerUser/registerUser.selector";
import { registerSchemaPersonal } from "../../ValidationSchema/ValidationSchema";
import CustomInput from "../../../../components/CustomInputs/CustomInput";
import CustomSelect from "../../../../components/CustomInputs/CustomSelect";
import RadioButtons from "../../../../components/CustomInputs/CustomRadioInputGroup";
import { selectStep } from "../../../../state-management/registerhelper/registerhelper.selector";
import { setStep } from "../../../../state-management/registerhelper/registerhelper.actions";
import FooterControl from "../../FooterControl/FooterControl";
import handleSubmit from "../../../../utils/helpers/register/HandleSubmit";

function PersonalForm() {
  const step = useSelector(selectStep);
  const options = [
    { key: "Male", value: "male" },
    { key: "Female", value: "female" },
  ];
  const dispatch = useDispatch();
  const registerData = useSelector(selectRegisterUser);
  const { firstname, lastname, country, address, age } = registerData; // destructure data from Redux for updating on every keypress

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
        <Form className="new-form">
          <RegisterFormPart>
            <CustomInput
              label="Firstname"
              name="firstname"
              type="text"
              small
              placeholder="Enter your firstname"
              setData={setData}
              value={firstname || ""}
            />
            <CustomInput
              label="Lastname"
              name="lastname"
              type="text"
              small
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
              small
              setData={setData}
              value={country || ""}
            >
              <option value="">Select a country</option>
              <option value="romania">Romania</option>
              <option value="italia">Italia</option>
              <option value="spania">Spania</option>
              <option value="germania">Germania</option>
            </CustomSelect>
            <CustomInput
              label="Address"
              name="address"
              type="text"
              small
              placeholder="Enter your address"
              setData={setData}
              value={address || ""}
            />
          </RegisterFormPart>
          <RegisterFormPart>
            <RadioButtons
              type="radio"
              label="Gender"
              name="gender"
              options={options}
              setData={setData}
            />
            <CustomInput
              label="Age"
              name="age"
              type="number"
              small
              placeholder="Enter your age"
              setData={setData}
              value={age || ""}
            />
          </RegisterFormPart>
          <FooterControl />
        </Form>
      </Formik>
    </>
  );
}

export default PersonalForm;
