import React from "react";
import { RegisterFormPart } from "../../FormRegister/FormRegister.style";
import Input from "../../../../components/UI/Input/Input";

function PlanForm({ values }) {
  const {
    formFields,
    setFormFields,
    checkedRo,
    checkedEur,
    setCheckedRo,
    setCheckedEur,
  } = values;

  //   currency - ron
  const handleChangeRon = (e) => {
    const { name, value } = e.target;
    setCheckedRo(!checkedRo);
    setFormFields({ ...formFields, [name]: value });
  };
  //   currency - euro
  const handleChangeEuro = (e) => {
    const { name, value } = e.target;
    setCheckedEur(!checkedEur);
    setFormFields({ ...formFields, [name]: value });
  };
  //   TypeOfPlan
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  console.log(formFields);
  return (
    <div>
      <RegisterFormPart>
        <Input
          onChange={handleChangeRon}
          type="checkbox"
          label="Ron"
          small
          value={!checkedRo}
          name="currencyRon"
        />
        <Input
          onChange={handleChangeEuro}
          type="checkbox"
          label="Euro"
          small
          value={!checkedEur}
          name="currencyEuro"
        />
      </RegisterFormPart>
      <div onChange={handleChange}>
        <Input type="radio" value="normal" name="typeOfPlan" label="Normal" />
        <Input type="radio" value="premium" name="typeOfPlan" label="Premium" />
        <Input type="radio" value="vip" name="typeOfPlan" label="VIP" />
      </div>
    </div>
  );
}

export default PlanForm;
