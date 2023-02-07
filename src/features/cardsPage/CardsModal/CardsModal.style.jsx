import styled from "styled-components";

export const CardsModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
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
  /* box-shadow: 0px 0px 20px -5px rgba(21, 20, 47, 0.73); */
  background: var(--green);
  background: linear-gradient(
    130deg,
    var(--green-light) 1%,
    var(--green) 60%,
    var(--green-dark) 100%
  );
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
        color: var(--yellow);
      }
    }
    & h3:last-of-type {
      border: none;
    }
  }
`;
