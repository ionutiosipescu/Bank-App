import styled from "styled-components";

export const NavBtnContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  cursor: pointer;
  ${(props) =>
    props.active === true
      ? `& :nth-child(1) {
    background-color: var(--purple);
    color: var(--white);
    transition: 0.3s;
  }
  & h2 {
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
    props.active ? "display: block; margin-left: 20px;" : "display: none;"}
`;
