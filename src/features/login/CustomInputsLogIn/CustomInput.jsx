import { useField } from "formik";
import {
  Group,
  InputForm,
  Error,
} from "../../../components/UI/Input/Input.style";
import "../../../components/UI/Input/Input.css";
import { useDispatch } from "react-redux";
import { setRegisterUser } from "../../../state-management/registerUser/registerUser.action";
import { selectRegisterUser } from "../../../state-management/registerUser/registerUser.selector";
import { useSelector } from "react-redux";

const CustomInput = ({ label, ...props }) => {
  // useField ne ajuta sa aveam acces la toate proprietatile din Formik
  // field is info about inout field
  // meta is touchet or error
  // helpers are functions

  //   const dispatch = useDispatch();
  //   const register = useSelector(selectRegisterUser);
  //   dispatch(setRegisterUser(register, field));

  const [field, meta, helpers] = useField(props);
  //   const { error, value } = meta;
  //   const { name, value } = field;

  //   console.log(error, value);
  //   console.log(name, value);
  //   console.log(field);
  //   console.log(meta);
  //   console.log(props);

  return (
    <>
      <Group>
        <label>{label}</label>
        <InputForm
          {...field}
          {...props}
          onChange={(e) => {
            field.onChange(e);
            props.valid(e);
          }}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        {meta.touched && meta.error && <Error>{meta.error}</Error>}
      </Group>
    </>
  );
};
export default CustomInput;
