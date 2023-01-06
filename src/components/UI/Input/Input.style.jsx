import styled from "styled-components";
import DatePicker from "react-datepicker";

// lv1
export const Group = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 10px 10px 0;
  label {
    margin-bottom: 10px;
  }
`;

// lv1
export const InputForm = styled.input`
  height: 35px;
  width: ${(props) => (props.small ? "200px" : "310px")};
  border: 1px solid var(--purple);
  border-radius: 30px;
  padding: 0 12px 0 10px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
    border: 2px solid var(--blue);
  }
`;
export const InputRadio = styled.input`
  /* position: absolute;
  opacity: 0;
  cursor: pointer; */
`;
export const InputSelect = styled.select`
  height: 35px;
  width: ${(props) => (props.small ? "200px" : "310px")};
  border: 1px solid var(--purple);
  border-radius: 30px;
  padding: 0 12px 0 10px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
    border: 2px solid var(--blue);
  }
`;

// export const InputDate = styled(DatePicker)`
//   height: 30px;
//   width: ${(props) => (props.small ? "150px" : "310px")};
//   border: 1px solid var(--purple);
//   border-radius: 30px;
//   padding: 0 12px 0 10px;
//   &:focus {
//     outline: none;
//     border: 2px solid var(--blue);
//   }
// `;
export const InputDateTest = styled.input`
  height: 30px;
  width: ${(props) => (props.small ? "200px" : "310px")};
  border: 1px solid var(--purple);
  border-radius: 30px;
  padding: 0 12px 0 10px;
  cursor: pointer;
  &:focus {
    outline: none;
    border: 2px solid var(--blue);
  }
`;

export const Checkbox = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 15px 0px 15px;
  input {
    width: fit-content;
    margin: 0 10px 0 0;
    transform: scale(1.25);
  }
`;

export const Error = styled.div`
  color: #fc8181;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  position: absolute;
  bottom: -10px;
`;

// export const InputCheckbox = styled.input``;

// export const CheckboxPlan = styled.div`
//   display: inline-block;
//   width: 100%;
//   height: 2rem;
//   border-radius: 1rem;
//   background-color: #ccc;
//   cursor: pointer;
//   text-align: center;
// `;

// export const InputCheckbox = styled.input`
//   display: none;

//   + ${CheckboxPlan}:before {
//     content: "";
//     display: inline-block;
//     width: 2rem;
//     height: 2rem;
//     border-radius: 1rem;
//     background-color: #fff;
//     box-shadow: 0 0 0 2px #ccc;
//     vertical-align: top;
//     margin-top: -0.5rem;
//     transition: all 0.2s;
//   }

//   &:checked + ${CheckboxPlan}:before {
//     background-color: #333;
//     box-shadow: 0 0 0 2px #333;
//   }

//   &:hover + ${CheckboxPlan} {
//     opacity: 0.8;
//   }
// `;
