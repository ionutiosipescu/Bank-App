import styled from "styled-components";

export const LabelListStyle = styled.label`
  font-family: "Heebo", sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.025rem;
  font-style: normal;
  border-radius: 1.25rem;
  padding: 0.35rem 0.75rem;
  box-shadow: 0px 1px 3px 1px rgba(51, 51, 51, 0.43);
  width: 100px;
  text-align: center;

  color: ${(props) =>
    props.status === "Completed"
      ? "var(--green)"
      : props.status === "Canceled"
      ? "var(--red)"
      : props.status === "Pending"
      ? "var(--gray-dark)"
      : "var(--gray-dark)"};
  background-color: ${(props) =>
    props.status === "Completed"
      ? "var(--green-light)"
      : props.status === "Canceled"
      ? "var(--red-light)"
      : props.status === "Pending"
      ? "var(--gray-light)"
      : "var(--gray-light)"};
`;
