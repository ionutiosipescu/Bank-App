import { Group, InputForm } from "../../../../UI/Input/Input.style";

const InputAmount = ({ label, ...props }) => {
  return (
    <>
      <Group>
        <label>{label}</label>
        <InputForm {...props} maxLength="35" />
      </Group>
    </>
  );
};
export default InputAmount;
