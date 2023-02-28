import styled from "styled-components";
import { sizeBtn } from "../../../utils/componentSizes/buttonSizes";

export const Btn = styled.button`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--purple);
  transition: 0.3s;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 50px;
  box-shadow: 0px 0px 12px -8px rgba(21, 20, 47, 0.8);

  ${(props) =>
    props.size === "sm"
      ? sizeBtn.sm
      : props.size === "md"
      ? sizeBtn.md
      : props.size === "lg"
      ? sizeBtn.lg
      : props.size === "xl"
      ? sizeBtn.xl
      : props.size === "round"
      ? sizeBtn.round
      : sizeBtn.fullWidth};
  ${(props) =>
    props.primary === "primary"
      ? "background: var(--purple); color: var(--text-light);"
      : "background: var(--white); color: var(--purple);"}
  ${(props) =>
    props.disabled ? "opacity: 0.5; cursor: default;" : "cursor: pointer;"}
  &:hover {
    scale: 1.08;
    ${(props) =>
      props.primary === "primary"
        ? "background: var(--purple-dark); color: var(--text-light);"
        : "background: var(--purple-light); color: var(--text-light); border: 1px solid var(--purple-dark);"}
  }
  & ${(props) => props.children} {
    transition: 0.3;
  }
`;
