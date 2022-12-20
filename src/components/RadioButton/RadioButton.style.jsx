import styled from "styled-components";

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 125px;
  height: 110px;
  font-size: 1.2rem;
  cursor: default;
  & > p {
    opacity: 0.8;
  }

  margin-top: 50px;
`;

export const RadioPill = styled.div`
  display: flex;
  ${(props) =>
    props.active === true
      ? "flex-direction: row; background-color: var(--purple);"
      : "flex-direction: row-reverse; background-color: var(--gray-dark);"}
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 60px;
  padding: 0px 5px;
  border-radius: 30px;

  color: var(--white);
  & p {
    ${(props) =>
      props.active === true ? "margin-left: 25px;" : "margin-right: 25px;"}
    font-weight: 600;
    font-size: 1.4rem;
  }
`;

export const RadioCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 40px;
  cursor: pointer;
  background-color: var(--white);
`;
