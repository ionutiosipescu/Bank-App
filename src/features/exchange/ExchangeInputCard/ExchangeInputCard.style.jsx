import styled from "styled-components";
import { device } from "../../../utils/breakpoints/breakpoints";
import { Form } from "formik";

export const ExchangeInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70%;
  margin-bottom: 20%;
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 1.5rem 0 1.5rem;
  margin: 10px 0 10px 0;
  border-radius: 30px;
  border: 2px solid var(--purple);
  & div {
    color: var(--text);
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

export const FormExchange = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-left: calc((100% - 70%) / 2);
  width: 70%;
  height: 100%;
`;
