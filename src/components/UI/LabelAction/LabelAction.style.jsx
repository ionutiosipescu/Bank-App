import styled from "styled-components";

export const LabelActionStyle = styled.h3`
  color: ${(props) =>
    props.action === "Deposit"
      ? "var(--green)"
      : props.action === "Withdraw"
      ? "var(--red)"
      : "var(--gray-dark)"};
`;
