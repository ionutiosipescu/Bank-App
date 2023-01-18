import styled from "styled-components";

export const UserTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border: 1px solid var(--purple);
  border-radius: 60px;
  padding: 0 30px 0 5px;
  & > img {
    width: 90px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 50px;
  }
`;

export const RecipientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  width: 100%;
  height: 90%;
`;

export const UserDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  height: 60%;
  font-size: 1.2rem;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 20px;
  & > div:first-of-type {
    margin-right: 20px;
  }
`;

export const DescriptionTitle = styled.div`
  & > *:first-of-type {
    opacity: 0.8;
  }
`;
