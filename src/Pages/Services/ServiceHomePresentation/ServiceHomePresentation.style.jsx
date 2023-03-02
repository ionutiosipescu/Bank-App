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
  height: 25vh;
  padding-left: 5%;
  width: calc(100% - 60px);
  margin: 30px 30px 20px 0;
  border-radius: 40px;
  background-color: var(--white);
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
`;

export const HeaderArt = styled.span`
  height: 100%;
  width: 75%;
  padding: 2% 5% 2% 20%;
  background-color: var(--green);
  background: linear-gradient(
    90deg,
    var(--purple-dark) 20%,
    var(--purple) 45%,
    var(--purple-light) 100%
  );
  clip-path: polygon(23% 0, 100% 0%, 100% 100%, 0% 100%);
  color: var(--text-light);
  & h2 {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  & img {
    height: 90%;
  }
`;

export const ChartsWrapper = styled.div`
  display: flex;
  width: calc(100% - 30px);
  height: 100%;
  & > div {
    padding: 0;
  }
`;

export const PresentationInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  padding: 30px;
  background-color: ${(props) => `var(--${props.color})`};
  color: ${(props) =>
    props.color === "red-light" ||
    props.color === "yellow" ||
    props.color === "green-light"
      ? "var(--text)"
      : "var(--white)"};
  & img {
    width: 50%;
  }
`;

///////////////////////////////////////////////////////

export const PresentationArtContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  & img {
    width: 100%;
  }
`;

export const PresentationArt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1/1;
  /* padding: 40px; */
  margin-right: 30px;
  /* background-color: var(--green);
  background: linear-gradient(
    110deg,
    var(--purple-dark) 20%,
    var(--purple) 45%,
    var(--purple-light) 100%
  );
  clip-path: circle(50% at 50% 50%); */
`;
