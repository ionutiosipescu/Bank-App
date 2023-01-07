import styled from "styled-components";

export const SuccesLinkContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--purple);
  border-radius: 20px;
  h5 {
    font-size: 15px;
  }
  a {
    font-size: 20px;
    color: var(--white);
  }
`;

export const SuccesLinkBtn = styled.div`
  height: 100%;
  background-color: var(--purple);
  padding: 30px;
  border-radius: 0 20px 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SuccesLinkTitle = styled.div`
  padding: 30px 0 30px 30px;
`;
