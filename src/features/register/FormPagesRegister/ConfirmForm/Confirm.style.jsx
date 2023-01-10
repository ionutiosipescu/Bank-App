import styled from "styled-components";
import { device } from "../../../../utils/breakpoints/breakpoints";
import { Form } from "formik";

export const ConfirmFormPart = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  flex-direction: column;
  @media ${device.mobileL} {
    flex-direction: row;
    gap: 30px;
    justify-content: center;
  }
`;
export const FormContainerConfirm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: auto;
  height: 100%;
  margin-top: 20px;
  h1 {
    align-self: center;
    margin-bottom: 35px;
  }
  ul {
    list-style: none;
  }
`;

export const FormDetails = styled.div`
  gap: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  li {
    color: #000;
  }
  @media ${device.tablet} {
    flex-direction: row;
    gap: 130px;
    width: 100%;
    text-align: unset;
    align-items: initial;
  }
`;

export const FormBox = styled.div`
  width: 205px;
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-direction: column;
  }
  li {
    margin: 0.5rem 0;
    width: auto;
    border-bottom: 1px solid #000;
  }
`;
