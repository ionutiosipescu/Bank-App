import React from "react";
import Input from "../../../../components/UI/Input/Input";
import { RegisterFormPart } from "../../FormRegister/FormRegister.style";

function AccountForm({ values }) {
  const { formFields, setFormFields } = values;

  const { displayName, email, password, confirmPassword, mobile } = formFields;
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  console.log(formFields);
  return (
    <div>
      <Input
        type="email"
        label="Email"
        value={email}
        name="email"
        onChange={handleChange}
      />
      <RegisterFormPart>
        <Input
          onChange={handleChange}
          type="text"
          label="Username"
          small
          value={displayName}
          name="displayName"
        />
        <Input
          onChange={handleChange}
          type="text"
          label="Mobile Number"
          small
          value={mobile}
          name="mobile"
        />
      </RegisterFormPart>
      <RegisterFormPart>
        <Input
          onChange={handleChange}
          type="password"
          label="Password"
          small
          value={password}
          name="password"
        />
        <Input
          onChange={handleChange}
          type="password"
          label="Confirm Password"
          small
          value={confirmPassword}
          name="confirmPassword"
        />
      </RegisterFormPart>
    </div>
  );
}

export default AccountForm;
