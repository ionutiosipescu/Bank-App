import styled from "styled-components";

export const NewLoanCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: ${(props) => (props.loans === 1 ? "100%" : "50%")};
  height: 380px;
  padding: 20px;
  margin: 10px;
  background-color: var(--white);
  box-shadow: 0px 0px 25px 0px rgba(79, 78, 105, 0.301);
  border-radius: 30px;
  & > img {
    height: 80%;
  }
  & span {
    width: 80%;
    display: flex;
    justify-content: center;
    & a {
      background-color: var(--green-dark);
      border: 1px solid var(--green-dark);
    }
    & a:hover {
      background-color: var(--green);
      border: 1px solid var(--green);
    }
  }
  & h2 {
    color: var(--gray-dark);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  & img {
    width: 120%;
    height: 115%;
  }
`;
