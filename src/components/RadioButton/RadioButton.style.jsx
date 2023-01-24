import styled from "styled-components";

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 110px;
  height: 50px;
  cursor: default;
  & > p {
    opacity: 0.8;
  }
`;

export const RadioPill = styled.div`
  display: flex;
  ${(props) =>
    props.active === "active"
      ? "flex-direction: row; background-color: var(--purple);"
      : "flex-direction: row-reverse; background-color: var(--gray-dark);"}
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 40px;
  padding: 0px 5px;
  border-radius: 30px;

  color: var(--white);
  & p {
    ${(props) =>
      props.active === "active" ? "margin-left: 25px;" : "margin-right: 25px;"}
    font-weight: 600;
  }
`;

export const RadioCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 40px;
  cursor: pointer;
  background-color: var(--white);
`;
