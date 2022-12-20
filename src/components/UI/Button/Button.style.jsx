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
  ${(props) =>
    props.size === "sm"
      ? "width: 100px; height: 30px;"
      : props.size === "md"
      ? "width: 150px; height: 40px;"
      : props.size === "lg"
      ? "width: 200px; height: 40px; font-size: 1.2rem;"
      : props.size === "xl"
      ? "width: 230px; height: 50px; font-size: 1.4rem;"
      : props.size === "100"
      ? "width: 100%; height: 40px;"
      : props.size === "fit"
      ? "width: fit-content; height: 30px;"
      : "width: 40px; height: 40px;"};
  ${(props) =>
    props.primary
      ? "background: var(--purple); color: var(--white);"
      : "background: none; color: var(--purple);"}
  &:hover {
    background: var(--blue);
    border: 1px solid var(--blue);
    color: var(--white);
  }
  & ${(props) => props.children} {
    transition: 0.3;
  }
`;
