import styled from "styled-components";

export const OutcomeBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(50% - 50px);
  height: 100%;
  margin-left: 150px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  & h2 {
    margin: 0 20px;
  }
`;
