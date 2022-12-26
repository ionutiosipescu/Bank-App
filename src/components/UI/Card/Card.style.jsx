import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 40px;
  margin: 15px 30px 15px 0;
  padding: 20px 30px;
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
      ? "width: 525px; height: 325px;"
      : props.size == "md"
      ? "width: 800px; height: 450px;"
      : props.size == "lg"
      ? "width: 100%; height: 810px;"
      : "width: fit-content; height: fit-content;"};
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
  @media (max-width: 1785px) {
    ${(props) =>
      props.size == "sm"
        ? "width: 505px; height: 315px;"
        : props.size == "md"
        ? "width: 770px; height: 440px;"
        : props.size == "lg"
        ? "width: 100%; height: 810px;"
        : "width: fit-content; height: fit-content;"};
  }
  @media (max-width: 1725px) {
    ${(props) =>
      props.size == "sm"
        ? "width: 485px; height: 305px;"
        : props.size == "md"
        ? "width: 735px; height: 430px;"
        : props.size == "lg"
        ? "width: 100%; height: 810px;"
        : "width: fit-content; height: fit-content;"};
  }
  @media (max-width: 1635px) {
    ${(props) =>
      props.size == "sm"
        ? "width: 445px; height: 285px;"
        : props.size == "md"
        ? "width: 680px; height: 400px;"
        : props.size == "lg"
        ? "width: 100%; height: 810px;"
        : "width: fit-content; height: fit-content;"};
    /* margin: 15px 20px 15px 0; */
  }
  @media (max-width: 1545px) {
    ${(props) =>
      props.size == "sm"
        ? "width: 485px; height: 305px;"
        : props.size == "md"
        ? "width: 795px; height: 470px;"
        : props.size == "lg"
        ? "width: 100%; height: 810px;"
        : "width: fit-content; height: fit-content;"};
  }
  @media (max-width: 1490px) {
    ${(props) =>
      props.size == "sm"
        ? "width: 465px; height: 295px;"
        : props.size == "md"
        ? "width: 720px; height: 460px;"
        : props.size == "lg"
        ? "width: 100%; height: 810px;"
        : "width: fit-content; height: fit-content;"};
  }
  @media (max-width: 1395px) {
    ${(props) =>
      props.size == "sm"
        ? "width: 405px; height: 265px;"
        : props.size == "md"
        ? "width: 650px; height: 405px;"
        : props.size == "lg"
        ? "width: 100%; height: 810px;"
        : "width: fit-content; height: fit-content;"};
  }
  @media (max-width: 1265px) {
    ${(props) =>
      props.size == "sm"
        ? "width: 365px; height: 235px;"
        : props.size == "md"
        ? "width: 570px; height: 330px;"
        : props.size == "lg"
        ? "width: 100%; height: 810px;"
        : "width: fit-content; height: fit-content;"};
  }
  @media (max-width: 1125px) {
    ${(props) =>
      props.size == "sm"
        ? "width: 405px; height: 265px;"
        : props.size == "md"
        ? "width: 405px; height: 265px;"
        : props.size == "lg"
        ? "width: 100%; height: 810px;"
        : "width: fit-content; height: fit-content;"};
    margin: 15px 0px 15px 0;
  }
  @media (max-width: 965px) {
    ${(props) =>
      props.size == "sm"
        ? "width: 550px; height: 330px;"
        : props.size == "md"
        ? "width: 550px; height: 330px;"
        : props.size == "lg"
        ? "width: 100%; height: 810px;"
        : "width: fit-content; height: fit-content;"};
    margin: 15px 0px 15px 0;
  }
  @media (max-width: 700px) {
    ${(props) =>
      props.size == "sm"
        ? "width: 405px; height: 265px;"
        : props.size == "md"
        ? "width: 405px; height: 265px;"
        : props.size == "lg"
        ? "width: 100%; height: 810px;"
        : "width: fit-content; height: fit-content;"};
    margin: 10px 0px 10px 0;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  width: 100%;
  z-index: 2;
  margin-bottom: 20px;
  ${(props) =>
    props.flex === "row"
      ? "flex-direction: row; align-items: center;"
      : "flex-direction: column;"};
  justify-content: space-between;
  & > h1 {
    font-size: 2rem;
  }
  & > h3 {
    font-size: 1.4rem;
  }
  & > div {
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-around;
  }
  & > div > div {
    display: flex;
    width: 70px;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  @media (max-width: 1395px) {
    & > h1 {
      font-size: 1.8rem;
    }
    & > h3 {
      font-size: 1rem;
    }
  }
`;
