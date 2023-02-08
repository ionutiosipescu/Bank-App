import styled, { css, keyframes } from "styled-components";
import { statusSize } from "../../../utils/componentSizes/statusMessageSizes";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`;

const shake = keyframes`
  0% {
    transform: translateX(0);
  }

  10% {
    transform: translateX(-10px);
  }

  20% {
    transform: translateX(10px);
  }

  30% {
    transform: translateX(-10px);
  }

  40% {
    transform: translateX(10px);
  }

  50% {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0) scaleX(1);
  }

  to {
    transform: translateX(-50%) scaleX(0);
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  position: relative;
  border-radius: 7px;
  padding: 15px 20px 15px 20px;
  margin: 5px;
  animation: ${slideIn} 0.2s ease-in-out forwards,
    ${shake} 0.3s ease-in-out forwards;
  ${(props) =>
    props.hide
      ? css`
          animation: ${slideOut} 0.3s ease-in-out forwards;
        `
      : ""}
  ${(props) =>
    props.size === "fit"
      ? statusSize.fit
      : props.size === "half"
      ? statusSize.half
      : props.size === "full"
      ? statusSize.full
      : statusSize.full}
  ${(props) =>
    props.type === "success"
      ? "background-color: var(--green-light); color: var(--green-dark);"
      : props.type === "error"
      ? "background-color: var(--red-light); color: var(--red-dark);"
      : props.type === "warning"
      ? "background-color: var(--yellow-light); color: var(--yellow-dark);"
      : props.type === "info"
      ? "background-color: var(--blue-light); color: var(--blue-dark);"
      : "background-color: var(--gray-light); color: var(--gray-dark);"}
`;
