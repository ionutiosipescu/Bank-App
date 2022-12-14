import styled from "styled-components";

export const Btn = styled.button`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1px solid var(--purple);
  background: var(--white);
  color: var(--purple);
  transition: 0.3s;
  margin: 10px 0 10px 0;
  &.btn-sm {
    width: 100px;
  }
  &.btn-sm {
    width: 100px;
  }
  &.btn-md {
    width: 150px;
  }
  &.btn-lg {
    width: 200px;
  }
  &.btn-100 {
    width: 100%;
  }
  &.btn-fit {
    width: fit-content;
    padding: 0 10px 0 10px;
  }
  &.btn-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  &.btn-primary {
    background: var(--purple);
    color: var(--white);
  }
  &.btn-secondary {
    background: var(--white);
    color: var(--purple);
  }
  &:hover {
    background: var(--blue);
    border: 1px solid var(--blue);
    color: var(--white);
  }
`;
