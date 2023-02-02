import styled from "styled-components";
import { deviceMax } from "../../../utils/breakpoints/breakpoints";
import { device } from "../../../utils/breakpoints/breakpoints";
import { css } from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  align-items: flex-start;
  justify-content: start;
  width: 100%;
  height: 90%;
  padding: 5px;
  /* border: 2px solid var(--gray); */
  border-radius: 10px;
  & > div:nth-child(even) {
    background-color: var(--gray-light);
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 80px;
  padding: 0 15px;
  /* border-bottom: 1px solid var(--gray-dark); */
  border-radius: 10px;
  @media (${device.mobileS}) {
    flex-direction: column;
    & > button {
      height: 35px;
    }
  }
  @media (${device.tablet}) {
    flex-direction: row;
  }
`;

export const ListIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: var(--purple);
  color: var(--white);
  @media (${device.mobileS}) {
    display: none;
  }
  @media (${device.tablet}) {
    display: flex;
  }
`;

export const LabelContainer = styled.h3`
  text-align: left;
  color: var(--green);
`;
export const AmountContainer = styled.h3`
  display: flex;
  color: var(--purple);
  margin-left: 60px;
  @media (${deviceMax.mobileS}) {
    margin: 5px 0 5px 5px;
  }
`;
export const IdContainer = styled.h3`
  @media (${device.mobileS}) {
    display: none;
  }
  @media (${device.tablet}) {
    display: flex;
  }
`;

export const IdList = styled.p`
  color: var(--purple);
`;
