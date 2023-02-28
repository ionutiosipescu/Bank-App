import styled from "styled-components";
import DatePicker from "react-datepicker";
import { device } from "../../../utils/breakpoints/breakpoints";
import { css } from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";

const StyledGroup = css`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 10px 10px 0;
  width: ${(props) => (props.small ? "200px" : "100%")};
  /* label {
    ${(props) =>
    props.large ? " margin-bottom: 20px;" : " margin-bottom: 10px;"};
  } */
  @media (${device.mobileS}) {
    label {
      ${(props) =>
        props.large ? " margin-bottom: 10px;" : " margin-bottom: 10px;"};
    }
  }
  @media (${device.laptop}) {
    label {
      ${(props) =>
        props.large ? " margin-bottom: 20px;" : " margin-bottom: 10px;"};
    }
  }
`;

export const Group = styled.div`
  ${StyledGroup}
  color: var(--text);
  label:after {
    content: "*";
    color: red;
  }
`;
export const ReCaptchaGroup = styled.div`
  ${StyledGroup}
  margin-top: 20px;
`;

export const StyledReCAPTCHA = styled(ReCAPTCHA)``;

export const GroupRadio = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 10px 10px 0;
  width: 200px;
  label {
    margin-bottom: 10px;
    margin-right: 10px;
  }
  @media (max-width: 1680px) {
    ${(props) =>
      props.small
        ? "width: 150px; height: 40px;"
        : props.large
        ? "width: 300px; height: 40px;"
        : props.radio
        ? "width: 200px; height: auto"
        : "width: 300px; height: 40px;"}
  }
`;
export const GroupRadioRegister = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  ${(props) => console.log(props)}
  margin: 0 10px 10px 0;
  width: 100%;
  label {
    /* margin-bottom: 10px;
    margin-right: 10px; */
    width: 100%;
  }
  @media (max-width: 1680px) {
    ${(props) =>
      props.small
        ? "width: 150px; height: 40px;"
        : props.large
        ? "width: 300px; height: 40px;"
        : props.radio
        ? "width: 200px; height: auto"
        : "width: 300px; height: 40px;"}
  }
`;

export const GroupRadioOption = styled.div`
  display: flex;
  width: 200px;
  justify-content: flex-start;
  align-items: center;
  input {
    margin-right: 15px;
  }
`;
export const RadioLabel = styled.label`
  margin-bottom: 25px;
  :after {
    content: "*";
    color: red;
  }
`;
export const RadioPlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => (props.size === "card" ? "0" : "20px")}; // 50px
  justify-content: ${(props) =>
    props.size === "card" ? "space-between" : "center"};
  align-items: center;
  @media ${device.laptop} {
    flex-direction: row;
    gap: 20px;
  }
`;

// shared style
const InputStyle = css`
  height: ${(props) => (props.tall ? "60px" : "35px")};
  border: 1px solid var(--purple);
  border-radius: 30px;
  padding: 0 12px 0 10px;
  background-color: var(--white);
  &:focus {
    outline: none;
    border: 2px solid var(--blue);
  }
`;

// lv1
export const InputForm = styled.input`
  ${InputStyle}
  width: ${(props) => (props.small ? "200px" : "100%")};

  ${(props) =>
    props.large
      ? "height: 60px; padding-left: 20px; font-size: 1.1rem; width: 100%;"
      : "padding-left: 20px;"}
  @media (${device.mobileS}) {
    ${(props) =>
      props.large
        ? "height: 40px; padding-left: 20px; font-size: 1.1rem; width: 100%;"
        : ""}
  }
  @media (${device.mobileL}) {
    ${(props) =>
      props.large
        ? "height: 50px; padding-left: 20px; font-size: 1.1rem; width: 100%;"
        : ""}
  }
  @media (${device.laptop}) {
    ${(props) =>
      props.large
        ? "height: 60px; padding-left: 20px; font-size: 1.1rem; width: 100%;"
        : ""}
  }
`;

export const InputSelect = styled.select`
  ${InputStyle}
  width: ${(props) => (props.small ? "200px" : "100%")};
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
