import styled from "styled-components";

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50vh;
  width: calc(100% - 30px);
  margin: 30px 30px 0 0;
  padding: 20px;
  border-radius: 40px;
  background-color: var(--white);
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 36%;
`;

export const CardsContainer = styled.div`
  height: 100%;
  width: calc(100% - 90px);
  & > div {
    position: absolute;
    scale: 60%;
    font-size: 1.4rem;
    padding: 30px;
    h2 {
      font-size: 2.6rem;
    }
    ${(props) =>
      props.clicked
        ? "transform: translate(-100px, 0px); z-index: 1;"
        : "transform: translate(-150px, -50px); z-index: 2;"};
  }
  & > div:last-child {
    ${(props) =>
      props.clicked
        ? "transform: translate(-150px, -50px); z-index: 2;"
        : "transform: translate(-100px, 0px); z-index: 1;"};
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 36%);
  height: 100%;
`;

export const FeatureContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50%;
`;
