import styled from "styled-components";

export const SavingsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 20px 20px 0 0;
  & > div:last-child {
    margin-left: 30px;
  }
  @media (max-width: 1439px) {
    flex-direction: column-reverse;
    & > div:last-child {
      margin-left: 0px;
    }
  }
  @media (max-width: 880px) {
    padding: 20px 0px 0 10px;
  } ;
`;
