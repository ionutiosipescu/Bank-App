import styled from "styled-components";

export const LoanElementContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid var(--purple-light);
  padding: 20px;
  border-radius: 20px;
  & label,
  span {
    font-size: 1.2rem;
    font-weight: 500;
  }
  & label {
    width: 35%;
  }
  & span {
    width: 20%;
    text-align: end;
  }
`;
