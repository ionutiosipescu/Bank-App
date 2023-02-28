import styled from "styled-components";

export const ProfileWrapper = styled.div`
  width: 70%;
  height: 100%;
  /* border-right: 2px solid var(--gray); */
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  /* width: 40%; */
  width: 100%;
  height: 60%;
  padding-bottom: 30px;
  border-bottom: 2px solid var(--gray);
  & img {
    height: 85%;
    border-radius: 50%;
    margin-right: 50px;
  }
  & h2 {
    margin-bottom: 30px;
  }
  & h1 {
    margin-bottom: 30px;
    color: var(--purple);
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40%;
  margin-top: 40px;
  padding-right: 30px;
`;

export const InfoSection = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  /* max-width: 30%; */
  & > div:last-of-type {
    margin-left: 1rem;
    /* max-width: 50%; */
  }
  & h4 {
    font-weight: 500;
    opacity: 0.9;
  }
  & p {
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 10px;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: var(--purple);
  color: var(--text-light);
`;
