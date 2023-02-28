import styled from "styled-components";
import { device } from "../../../../utils/breakpoints/breakpoints";
import { Form } from "formik";
import { ErrorMessage } from "formik";

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
  & h3 {
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid var(--gray-dark);
  }
  @media ${device.tablet} {
    flex-direction: row;
    gap: 130px;
    width: 100%;
    text-align: unset;
    align-items: initial;
  }
  @media ${device.laptop} {
    gap: 150px;
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    /* align-items: center; */
    width: 100%;
    /* text-align: center; */
    li {
      color: #000;
    }
  }
`;

export const FormBox = styled.div`
  /* width: 205px; */
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
    padding: 0 0 5px 0;
    /* border-bottom: 1px solid var(--gray); */
    & span {
      color: var(--purple);
    }
  }
`;
