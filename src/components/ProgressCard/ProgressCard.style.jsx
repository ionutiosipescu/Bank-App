import styled from "styled-components";

export const ProgressCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 380px;
  background-color: var(--white);
  padding: 20px 30px;
  margin: 10px;
  box-shadow: 0px 0px 25px 0px rgba(79, 78, 105, 0.301);
  border-radius: 30px;
  & > h2,
  > h3 {
    align-self: center;
    & > span {
      color: var(--green);
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30%;
  width: 100%;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  font-size: 1.2rem;
  & h4 {
    color: var(--gray-dark);
  }
  & h3 {
    color: var(--green);
  }
`;

export const ProgressCardIllustration = styled.img`
  width: 80%;
  max-width: 140px;
  border-radius: 50px;
  /* height: 150px; */
`;

// ~ Progress Bar

export const ProgressBar = styled.div`
  height: 1.5rem;
  width: 100%;
  border-radius: 15px;
  background-color: var(--gray);
  overflow: hidden;
`;

export const ProgressBarInterior = styled.div`
  height: 100%;
  width: ${(props) => (props.paid / props.amount) * 100}%;
  background-color: var(--green);
  border-radius: 15px;
`;
