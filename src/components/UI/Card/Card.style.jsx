import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 40px;
  margin: 20px 30px 0px 0px;
  padding: 40px;
  overflow: hidden;
  background-color: ${(props) =>
    props.color == "purple"
      ? "var(--purple)"
      : props.color == "green"
      ? "var(--green)"
      : "var(--white)"};
  color: ${(props) =>
    props.color == "purple" || props.color == "green"
      ? "var(--white)"
      : "var(--text)"};
  width: ${(props) =>
    props.size == "sm"
      ? "500px"
      : props.size == "md"
      ? "750px"
      : "fit-content"};
  height: ${(props) =>
    props.size == "sm"
      ? "330px"
      : props.size == "md"
      ? "480px"
      : "fit-content"};
  box-shadow: 0px 0px 25px -8px rgba(21, 20, 47, 0.73);
`;
