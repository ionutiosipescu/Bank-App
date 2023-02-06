import styled from "styled-components";

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const Circle = styled.div`
  position: absolute;
  top: 10%;
  ${(props) =>
    props.size === "fit"
      ? "width: 30px; height: 30px;"
      : "width: 60px; height: 60px;"};
  border-radius: 50%;
  opacity: 0.4;
  background-color: var(--purple-light);
  ${(props) => (props.one ? "left: 80%" : "left: 73%")}
`;

export const Pill = styled.div`
  position: absolute;
  width: ${(props) => (props.size === "fit" ? "60px" : "90px")};
  height: 300px;
  border-radius: 50px;
  ${(props) =>
    props.one ? "top: 40%; left: 88%" : "top: 60%; left: 79%; opacity: 0.5;"};
  background-color: ${(props) =>
    props.currency === "ron" ? "var(--blue)" : "var(--purple)"};

  /* transform: ${(props) =>
    props.one ? "translate(230px, 70px)" : "translate(170px, 120px)"};
    opacity: ${(props) => (props.two ? "0.5" : "1")};
  @media (max-width: 1395px) {
    transform: ${(props) =>
    props.one ? "translate(190px, 70px)" : "translate(140px, 120px)"};
  } */
`;
