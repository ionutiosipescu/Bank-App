import { useField } from "formik";
import {
  Group,
  InputForm,
  Error,
} from "../../../components/UI/Input/Input.style";
import "../../../components/UI/Input/Input.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setRegisterUser } from "../../../state-management/registerUser/registerUser.action";
import { selectRegisterUser } from "../../../state-management/registerUser/registerUser.selector";

const CustomPassword = ({ label, ...props }) => {
  // const register = useSelector(selectRegisterUser);
  // const dispatch = useDispatch();
  // const handleChange = (e) => {
  //   dispatch(setRegisterUser(register, e));
  // };
  const [field, meta] = useField(props);

  return (
    <>
      <Group>
        <label>{label}</label>
        <InputForm
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        {meta.touched && meta.error && <Error>{meta.error}</Error>}
      </Group>
    </>
  );
};
export default CustomPassword;
