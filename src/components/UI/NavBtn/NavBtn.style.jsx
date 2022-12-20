import styled from "styled-components";

export const NavBtnContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: fit-content;
  cursor: pointer;
  & > * {
    margin-right: 20px !important;
  }

  /* &:hover :nth-child(1) {
    background-color: var(--purple);
    color: var(--white);
    transition: 0.3s;
  } */
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
  font-size: 1.6rem;
  font-weight: 600;
  opacity: 0.7;
  color: var(--text);
  &:hover {
    opacity: 1;
  }
`;
