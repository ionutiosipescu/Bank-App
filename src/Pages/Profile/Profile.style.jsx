import styled from "styled-components";

export const PlanContainer = styled.div`
  width: 30%;
  height: 100%;
`;

export const UsersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

export const UsersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
  width: 100%;
  height: 100%;
`;

export const UsersListCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: calc(100% - 60px);
  height: 80vh;
  border-radius: 50px;
  margin: 20px 30px 20px 0px;
  padding: 30px 40px;
  background-color: var(--white);
  color: var(--text);
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
  & h2 {
    margin-bottom: 50px;
  }
`;
