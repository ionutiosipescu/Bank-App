import styled from "styled-components";

export const SavingsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 100px);
  padding: 30px 40px 0 30px;
  & > div:last-child {
    margin-left: 30px;
  }
`;
