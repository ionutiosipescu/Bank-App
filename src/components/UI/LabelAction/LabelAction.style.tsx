import styled from "styled-components";

export type LabelActionStyleProps = {
action?: string,
}

export const LabelActionStyle = styled.h3<LabelActionStyleProps>`
  color: ${(props) =>
    props.action === "Deposit"
      ? "var(--green)"
      : props.action === "Withdraw"
      ? "var(--red)"
      : "var(--gray-dark)"};
`;
