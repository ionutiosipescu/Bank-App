import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 50%;
  padding: 10px;
  margin-top: 30px;
  color: var(--text);
  & h3 {
    opacity: 0.7;
    font-weight: 600;
  }
  & h4 {
    font-size: 1.2rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
`;
