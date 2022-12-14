import styled from "styled-components";

export const ProfileWrapper = styled.div`
  width: 70%;
  height: 100%;
  border-right: 1px solid var(--gray-dark);
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  height: 55%;
  & img {
    height: 200px;
    border-radius: 50%;
  }
  & h2 {
    margin-bottom: 30px;
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
  max-width: 30%;
  & > div:last-of-type {
    margin-left: 30px;
    max-width: 50%;
  }
  & h4 {
    font-weight: 500;
    opacity: 0.9;
  }
  & p {
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 20px;
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
  color: var(--white);
`;
