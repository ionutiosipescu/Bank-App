import styled from "styled-components";
import { css } from "styled-components";

export const SwitchHolder = styled.div`
  color: #333;
  display: flex;
  /* padding: 10px 20px;
  border-radius: 10px;
  box-shadow: -8px -8px 15px rgba(255, 255, 255, 0.7),
    10px 10px 10px rgba(0, 0, 0, 0.2),
    inset 8px 8px 15px rgba(255, 255, 255, 0.7),
    inset 10px 10px 10px rgba(0, 0, 0, 0.2); */
  justify-content: space-between;
  align-items: center;
`;

export const SwitchLabel = styled.div`
  padding: 0 20px 0 10px;
  i {
    margin-right: 5px;
  }
`;

export const SwitchToggle = styled.div`
  height: 40px;
  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    z-index: -2;
  }
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  margin: 0;
  cursor: pointer;
  box-shadow: inset -8px -8px 15px rgba(255, 255, 255, 0.6),
    inset 10px 10px 10px rgba(0, 0, 0, 0.25);
  &::before {
    position: absolute;
    color: #333;
    content: "Ron";
    font-size: 13px;
    text-align: center;
    line-height: 25px;
    top: 8px;
    left: 8px;
    width: 45px;
    height: 25px;
    border-radius: 20px;
    background-color: #eeeeee;
    box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5),
      3px 3px 5px rgba(0, 0, 0, 0.25);
    transition: 0.3s ease-in-out;
  }
`;
export const InputToggle = styled.input`
  ${(props) =>
    props.checked &&
    css`
      ${Label}::before {
        left: 50%;
        content: "Eur";
        color: #fff;
        background-color: #00b33c;
        box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5), 3px 3px 5px #00b33c;
      }
    `}
`;