import styled from "styled-components";

export const PresentationPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100%);
  height: 100%;
`;

export const PresentationTopCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  height: 30vh;
  width: calc(100% - 60px);
  padding: 30px;
  margin: 30px 30px 20px 0;
  border-radius: 40px;
  background-color: var(--white);
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
`;

export const HeaderArt = styled.span`
  padding: 2% 5% 2% 10%;
  background-color: var(--green);
  background: linear-gradient(
    90deg,
    var(--purple-dark) 0%,
    var(--purple) 35%,
    var(--purple-light) 100%
  );
  clip-path: polygon(13% 0, 100% 0%, 89% 100%, 0% 100%);
  color: var(--white);
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  & img {
    height: 100%;
  }
`;

export const ChartsWrapper = styled.div`
  display: flex;
  width: calc(100% - 30px);
  height: 100%;
`;
