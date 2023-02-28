import styled from "styled-components";

export const NavBtnContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  cursor: pointer;
  ${(props) =>
    props.selected === true
      ? `& :nth-child(1) {
    background-color: var(--purple);
    color: var(--text-light);
    transition: 0.3s;
  }
  & * {
    opacity: 1;
  }`
      : ""}
`;

export const Label = styled.h2`
  font-weight: 600;
  opacity: 0.7;
  color: var(--text);
  &:hover {
    opacity: 1;
  }
  ${(props) =>
    props.active === "active"
      ? "display: block; margin-left: 20px;"
      : "display: none;"}
`;
