import styled from "styled-components";

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

export const OutcomeBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  height: 100%;
`;

export const ChartWrapper = styled.div`
  height: 100%;
  width: 50%;
  padding: 25px;
`;
