import styled from "styled-components";

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
  box-shadow: 0px 0px 25px -8px rgba(21, 20, 47, 0.73);
  background-color: var(--white);
  transition: 0.3s;
  @media (max-width: 1024px) {
    padding: 5px;
    width: ${(props) => (props.active ? "300px" : "65px")};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 80%;
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
