import React from "react";
import { RegisterFormPart } from "../../FormRegister/FormRegister.style";
import Input from "../../../../components/UI/Input/Input";

function PersonalForm({ values }) {
  const { formFields, setFormFields } = values;
  const { lastName, firstName, city, number, birthDate, gender } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  console.log(formFields);
  return (
    <>
      <RegisterFormPart>
        <Input
          onChange={handleChange}
          type="text"
          label="First Name"
          small
          name="firstName"
          value={firstName}
        />
        <Input
          onChange={handleChange}
          type="text"
          label="Last Name"
          small
          name="lastName"
          value={lastName}
        />
      </RegisterFormPart>
      <RegisterFormPart>
        <Input
          onChange={handleChange}
          type="text"
          label="Address"
          small
          placeholder="City"
          value={city}
          name="city"
        />
        <Input
          onChange={handleChange}
          type="text"
          small
          placeholder="Number, Suite, etc"
          value={number}
          name="number"
        />
      </RegisterFormPart>
      <RegisterFormPart>
        <Input
          onChange={handleChange}
          type="text"
          label="Gender"
          small
          value={gender}
          name="gender"
        />
        <Input
          onChange={handleChange}
          type="date"
          label="Birth Date"
          small
          value={birthDate}
          name="birthDate"
        />
      </RegisterFormPart>
    </>
  );
}

export default PersonalForm;
