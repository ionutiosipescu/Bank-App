import styled from "styled-components";

export const LabelActionStyle = styled.h3`
  color: ${(props) =>
    props.action === "deposit"
      ? "var(--green)"
      : props.action === "windraw"
      ? "var(--red)"
      : "var(--gray-dark)"};
`;
