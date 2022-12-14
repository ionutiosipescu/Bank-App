import styled from "styled-components";

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 2;
  & > h1 {
    font-size: 3rem;
  }
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  z-index: 2;
`;

export const CardFooter = styled.div`
  display: flex;
  width: 100%;
  z-index: 2;
  & > div {
    margin-right: 30px;
  }
  & > h3 {
    margin-bottom: 8px;
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  opacity: 0.4;
  background-color: var(--white);
  translate: ${(props) => (props.one ? "180px" : "135px")};
`;

export const Pill = styled.div`
  position: absolute;
  width: 100px;
  height: 300px;
  border-radius: 50px;
  transform: ${(props) =>
    props.one ? "translate(210px, 70px)" : "translate(170px, 120px)"};
  opacity: ${(props) => (props.two ? "0.5" : "1")};
  background-color: ${(props) =>
    props.color == "purple" ? "var(--blue)" : "var(--yellow)"};
`;
