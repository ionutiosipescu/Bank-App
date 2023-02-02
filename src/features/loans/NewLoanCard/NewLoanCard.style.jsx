import styled from "styled-components";

export const NewLoanCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: calc(25% - 16px);
  height: 400px;
  background-color: var(--green-light);
  padding: 30px;
  box-shadow: 0px 0px 25px 0px rgba(79, 78, 105, 0.301);
  border-radius: 30px;
  & img {
    height: 30%;
  }
`;
