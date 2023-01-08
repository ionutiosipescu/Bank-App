import styled from "styled-components";

export const SavingsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 30px 40px 0 30px;
  & > div:last-child {
    margin-left: 30px;
  }
  @media (max-width: 1400px) {
    flex-direction: column-reverse;
    & > div:last-child {
      margin-left: 0px;
    }
  }
`;
