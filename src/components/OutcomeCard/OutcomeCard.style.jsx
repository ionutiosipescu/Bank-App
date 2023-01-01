import styled from "styled-components";

export const OutcomeBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(50% - 50px);
  height: 100%;
`;

export const LegendItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  & > div {
    display: flex;
    align-items: center;
  }
  & h4 {
    margin: 0 10px;
  }
`;
