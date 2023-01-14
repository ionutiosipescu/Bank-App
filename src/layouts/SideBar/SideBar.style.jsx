import styled from "styled-components";

export const ChevronWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--purple);
  width: 40px;
  aspect-ratio: 1/1;
  cursor: pointer;
`;

export const SideBarWrapper = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 250px;
  padding: 20px;
  margin: 0;
  box-shadow: 0px 0px 25px -8px rgba(21, 20, 47, 0.73);
  background-color: var(--white);
  transition: 0.2s;
  ${ChevronWrapper} {
    display: none;
  }
  @media (max-width: 1050px) {
    padding: 5px;
    width: ${(props) => (props.active ? "300px" : "65px")};
  }
  @media (max-width: 460px) {
    ${(props) =>
      props.active
        ? "height: 100%; width: 300px;"
        : "height: 50px; width: 50px; top: 5px; left: 8px; border: 1px solid var(--purple); border-radius: 40px; justify-content: center; align-items: center; margin-top: 10px;"};
    ${ChevronWrapper} {
      ${(props) => (props.active ? "display: none;" : "display: flex;")}
    }
    & > :not(${ChevronWrapper}) {
      ${(props) => (props.active ? "" : "display: none;")}
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 80%;
  color: var(--purple);
  & * {
    cursor: pointer;
  }
  ${(props) =>
    props.active
      ? "flex-direction: row; margin: 0 0 100px 0px; height: 50px;"
      : "flex-direction: column; margin: 0 0 50px 0; height: 100px;"}
  justify-content: space-between;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  transition: 0.3s;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* align-items: center; */
  height: fit-content;
  width: 100%;
`;
