import styled from "styled-components";

export const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  width: 90%;
  height: 95%;
  margin: 10px 0 0 40px;
  padding: 30px;
  border-radius: 20px;
  background: rgb(97, 96, 220);
  background: linear-gradient(
    180deg,
    rgba(97, 96, 220, 1) 0%,
    rgba(84, 197, 235, 1) 100%
  );
  color: var(--white);
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
  @media (max-width: 1680px) {
    aspect-ratio: 7/8;
  }
`;

export const PlanSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  & > * {
    z-index: 2;
  }
`;

export const Bubble = styled.div`
  position: absolute;
  ${(props) =>
    props.mid
      ? "top: 50%; left: 75%; opacity: 0.3; width: 50%;"
      : props.top
      ? "top: 75%; left: 60%; opacity: 0.5; width: 30%;"
      : "top: -5%; left: 82%; opacity: 0.5; width: 20%;"}

  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: var(--white);

  z-index: 1;
`;

export const PlanHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;
