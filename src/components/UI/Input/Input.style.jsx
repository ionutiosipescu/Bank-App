import styled from "styled-components";
import DatePicker from "react-datepicker";
import { device } from "../../../utils/breakpoints/breakpoints";
import { css } from "styled-components";

export const Group = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 10px 10px 0;
  label {
    margin-bottom: 10px;
  }
`;

export const GroupRadio = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 10px 10px 0;
  width: 200px;
  label {
    margin-bottom: 10px;
  }
  @media (max-width: 1680px) {
    ${(props) =>
      props.small
        ? "width: 150px; height: 40px;"
        : props.large
        ? "width: 300px; height: 40px;"
        : "width: 310px; height: 40px;"};
  }
`;

export const RadioPlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    flex-direction: row;
    gap: 20px;
  }
`;

// shared style
const InputStyle = css`
  height: 35px;
  border: 1px solid var(--purple);
  border-radius: 30px;
  padding: 0 12px 0 10px;
  &:focus {
    outline: none;
    border: 2px solid var(--blue);
  }
`;

// lv1
export const InputForm = styled.input`
  ${InputStyle}
  width: ${(props) => (props.small ? "200px" : "100%")};
  ${(props) => (props.large ? "width: 300px; height: 40px;" : "")}
  @media (max-width: 1400px) {
    ${(props) => (props.large ? "width: 250px; height: 40px;" : "")}
  }
  @media (max-width: 1250px) {
    ${(props) => (props.large ? "width: 200px; height: 40px;" : "")}
  }
  @media (max-width: 880px) {
    ${(props) => (props.large ? "width: 300px; height: 40px;" : "")}
  }
  @media (max-width: 530px) {
    ${(props) => (props.large ? "width: 250px; height: 40px;" : "")}
  }
  @media (max-width: 400px) {
    ${(props) => (props.large ? "width: 200px; height: 40px;" : "")}
  }
  @media (max-width: 360px) {
    ${(props) => (props.large ? "width: 100%; height: 40px;" : "")}
  }
`;

export const InputSelect = styled.select`
  ${InputStyle}
  width: ${(props) => (props.small ? "200px" : "310px")};
  margin-bottom: 10px;
`;

export const InputRadio = styled.input``;

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
  bottom: -22px;
`;
