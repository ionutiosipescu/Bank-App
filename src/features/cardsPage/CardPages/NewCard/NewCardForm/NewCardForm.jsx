import React from "react";
import {
  NewCardFormContainer,
  FormContainer,
  RowNewCardSection,
} from "./NewCardForm.style";
import Button from "../../../../../components/UI/Button/Button";
import { Formik, Form } from "formik";
import CustomInput from "../../../../../components/CustomInputs/CustomInput";
import CustomCheckbox from "../../../../../components/CustomInputs/CustomCheckbox";

function NewCardForm() {
  return (
    <NewCardFormContainer>
      <Formik>
        <FormContainer>
          <h2>Account</h2>
          <RowNewCardSection>
            <CustomInput
              label="Street"
              name="street"
              type="text"
              placeholder="Enter your address"
              large
            />
            <CustomInput
              label="Postal Code"
              name="postal"
              type="number"
              placeholder="Enter your postal code"
              large
            />
          </RowNewCardSection>
          <RowNewCardSection>
            <CustomInput
              label="City"
              name="city"
              type="text"
              placeholder="Enter your city"
              large
            />
            <CustomInput
              label="Phone Number"
              name="phone"
              type="number"
              placeholder="Enter your phone number"
              large
            />
          </RowNewCardSection>
          <CustomCheckbox
            label="I confirm the address details"
            type="checkbox"
            name="acceptAddress"
          />
        </FormContainer>
      </Formik>
    </NewCardFormContainer>
  );
}

export default NewCardForm;
