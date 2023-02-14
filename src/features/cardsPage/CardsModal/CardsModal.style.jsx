import styled from "styled-components";
import { planGradient } from "./../../../utils/planGradients/planGradients";

export const CardsModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50vw;
  height: 67vh;
  & > h1 {
    ${(props) => (props.type === "delete" ? "color: var(--red);" : "")}
  }
`;

export const AccountInfoContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60%;
  padding: 30px 10px;
  & > div:first-of-type {
    width: 50%;
    font-size: 0.9rem;
    & > div {
      width: 100%;
    }
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  & li {
    font-size: 1.2rem;
    font-weight: 600;
  }
  & span {
    color: var(--green);
  }
`;

// Plan Card

export const PlanCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 85%;
  border-radius: 10px;
  ${(props) =>
    props.type === "standard"
      ? planGradient.standard
      : props.type === "premium"
      ? planGradient.premium
      : props.type === "vip"
      ? planGradient.vip
      : ""}
  padding: 20px;
  & h2 {
    color: var(--white);
  }
  & div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70%;
    & h3 {
      padding: 5px;
      color: var(--gray-light);
      border-bottom: 1px solid var(--gray);
      & span {
        color: var(--white);
        /* background-color: var(--green); */
        /* padding: 2px; */
        /* border-radius: 10px; */
        /* text-shadow: 4px 1px 0px var(--yellow-dark); */
      }
    }
    & h3:last-of-type {
      border: none;
    }
  }
`;
