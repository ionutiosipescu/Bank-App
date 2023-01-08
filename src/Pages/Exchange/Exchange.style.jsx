import styled from "styled-components";

export const ExchangeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 30px 40px 0 30px;
  @media (max-width: 1400px) {
    flex-direction: column-reverse;
  }
`;
