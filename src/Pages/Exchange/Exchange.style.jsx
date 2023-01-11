import styled from "styled-components";

export const ExchangeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 30px 20px 0 0;
  @media (max-width: 1400px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 880px) {
    padding: 20px 20px 0 10px;
  }
`;
