import styled from "styled-components";
import { device } from "../../../utils/breakpoints/breakpoints";

export const ExchangeInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin: 50px 0;
  /* Media queries */
  @media (${device.mobileS}) {
    margin: 10px 0 0 0;
    height: 85%;
  }
  @media (${device.desktop}) {
    height: 60%;
  }
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
