import { constants } from "buffer";
import styled from "styled-components";
import { planGradient } from "../../utils/planGradients/planGradients";

export const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  width: 90%;
  height: 95%;
  margin: 10px 0 0 40px;
  padding: 30px 30px 20px 30px;
  border-radius: 20px;
  ${(props) =>
    props.plan === "standard"
      ? planGradient.standard
      : props.plan === "premium"
      ? planGradient.premium
      : props.plan === "vip"
      ? planGradient.vip
      : ""}
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
  @media (max-width: 1680px) {
    aspect-ratio: 7/8;
  }
`;

export const PlanSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const PlanOptions = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 1.1rem;
  font-weight: 500;
  & li {
    margin-bottom: 5px;
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
  background-color: var(--text-light);
  /* z-index: 1; */
`;

export const PlanHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;
