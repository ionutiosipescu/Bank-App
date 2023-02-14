import styled from "styled-components";

export const UserCardContainer = styled.div`
  width: 24%;
  height: 45%;
  padding: 10px 30px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px -9px rgba(21, 20, 47, 0.73);
  cursor: pointer;
  color: var(--text);
  transition: 0.3s;
  &:hover {
    scale: 110%;
    transition: 0.3s;
  }
  & img {
    aspect-ratio: 1/1;
    object-fit: cover;
  }
`;

export const UserCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 45%;
  & > img {
    width: 30%;
    border-radius: 50%;
  }
`;

export const UserCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 55%;
`;

export const UserCardInfo = styled.div`
  display: flex;
  width: 100%;
  & > div:last-of-type {
    margin-left: 20px;
  }
`;
