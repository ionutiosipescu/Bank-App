import styled from "styled-components";
import { deviceMax } from "../../../utils/breakpoints/breakpoints";
import { device } from "../../../utils/breakpoints/breakpoints";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  align-items: flex-start;
  justify-content: start;
  width: 100%;
  height: 100%;
  padding: 5px;
  /* font-size: 1.6rem; */
  & > div:nth-child(even) {
    background-color: var(--gray-light);
  }
  @media (max-width: 1600px) {
    & h3 {
      /* font-size: 1rem; */
    }
  }
  @media (max-width: 670px) {
    & h3 {
      font-size: 1.2rem;
    }
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 15%;
  padding: 0 15px;
  border-bottom: 1px solid var(--gray-dark);
  & > div:first-of-type {
    width: 60%;
  }
  & > div,
  & > h3 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  & > div > h3 {
    margin-left: 16px;
  }
  & > div > a {
    margin-left: 10px;
  }
  @media (max-width: 700px) {
    & > div:first-of-type > div:first-of-type {
      display: none;
    }
    & > div > h3 {
      margin-left: 0px;
    }
  }
  @media (max-width: 670px) {
    & > div:first-of-type {
      width: 80%;
    }
    flex-direction: column;
    & > div {
      display: flex;
    }
  }
`;

export const LabelContainer = styled.h3`
  color: var(--green);
`;
export const AmountContainer = styled.h3`
  display: flex;
  color: var(--purple);
  margin-left: 60px !important;
  & > p {
    margin-right: 5px;
  }
  @media (${deviceMax.mobileM}) {
    margin: 5px 0 5px 16px !important;
  }
  @media (${deviceMax.mobileS}) {
    margin: 5px 0 5px 5px !important;
    & > p {
      display: none;
    }
  } ;
`;
export const IdContainer = styled.h3`
  @media (max-width: 800px) {
    display: none;
  }
`;
