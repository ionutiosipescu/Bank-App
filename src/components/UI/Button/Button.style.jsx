import styled from "styled-components";

export const Btn = styled.div`
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
      ? "width: 100px; height: 30px; font-size: 0.8rem;"
      : props.size === "md"
      ? "width: 150px; height: 40px;"
      : props.size === "lg"
      ? "width: 200px; height: 40px;"
      : props.size === "xl"
      ? "width: 230px; height: 50px;"
      : props.size === "100"
      ? "width: 100%; height: 40px;"
      : props.size === "fit"
      ? "width: fit-content; height: 30px;"
      : "width: 40px; height: 40px;"};
  ${(props) =>
    props.primary
      ? "background: var(--purple); color: var(--white);"
      : "background: var(--white); color: var(--purple);"}
  &:hover {
    ${(props) =>
      props.primary
        ? "background: var(--white); color: var(--purple);"
        : "background: var(--purple); color: var(--white); border: 1px solid var(--purple);"}
  }
  & ${(props) => props.children} {
    transition: 0.3;
  }
`;
