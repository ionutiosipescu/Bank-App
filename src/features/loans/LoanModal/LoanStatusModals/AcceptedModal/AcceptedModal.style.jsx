import styled from "styled-components";

export const LoanModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50vw;
  height: 60vh;
`;

export const MidContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  /* margin-top: 20px; */
  align-items: center;
  width: 100%;
  height: 50%;
  & img {
    margin-left: 10%;
    height: 100%;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 80%;
`;

export const DetailSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const DetailPill = styled.div`
  width: 200px;
  height: fit-content;
  border-radius: 16px;
  padding: 12px 20px;
  font-weight: 500;

  color: var(--text);
  ${(props) =>
    props.type === "text"
      ? "width: 200px; background-color: var(--gray);"
      : props.type === "number"
      ? "width: fit-content; background-color: var(--gray);"
      : "width: fit-content; background-color: var(--red-light);"}
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  & > p {
    margin-left: 20px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  & > button:last-of-type {
    margin-left: 20px;
    background-color: var(--red-dark);
    border: 1px solid var(--red-light);
    &:hover {
      background-color: var(--red);
    }
  }
`;
