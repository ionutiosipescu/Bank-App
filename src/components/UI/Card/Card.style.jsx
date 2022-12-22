import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 40px;
  margin-top: 20px;
  padding: 30px;
  overflow: hidden;
  background-color: ${(props) =>
    props.color == "purple"
      ? "var(--purple)"
      : props.color == "green"
      ? "var(--green)"
      : "var(--white)"};
  color: ${(props) =>
    props.color == "purple" || props.color == "green"
      ? "var(--white)"
      : "var(--text)"};
  ${(props) =>
    props.size == "sm"
      ? "width: 500px; height: 330px;"
      : props.size == "md"
      ? "width: 770px; height: 455px;"
      : props.size == "lg"
      ? "width: 100%; height: 810px;"
      : "width: fit-content; height: fit-content;"};
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
`;

export const CardHeader = styled.div`
  display: flex;
  width: 100%;
  z-index: 2;
  margin-bottom: 10px;
  ${(props) =>
    props.flex === "row"
      ? "flex-direction: row; align-items: center;"
      : "flex-direction: column;"};
  justify-content: space-between;
  & > h1 {
    font-size: 3rem;
  }
  & > h3 {
    font-size: 2rem;
  }
  & > div {
    display: flex;
    width: 30%;
    justify-content: space-around;
  }
  & > div > div {
    display: flex;
    width: 70px;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
`;
