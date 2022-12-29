import styled from "styled-components";

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 10px 0;
  label {
    margin-bottom: 10px;
  }
`;
export const InputForm = styled.input`
  ${(props) =>
    props.small
      ? "width: 150px; height: 40px;"
      : props.large
      ? "width: 400px; height: 60px;"
      : "width: 310px; height: 40px;"};
  border: 1px solid var(--gray-dark);
  border-radius: 40px;
  padding: 0 20px 0 20px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
    border: 2px solid var(--blue);
  }
  @media (max-width: 1680px) {
    ${(props) =>
      props.small
        ? "width: 150px; height: 40px;"
        : props.large
        ? "width: 300px; height: 40px;"
        : "width: 310px; height: 40px;"};
  }
`;

export const Checkbox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 15px 0px 15px;
  input {
    width: fit-content;
    margin: 0 10px 0 0;
    transform: scale(1.25);
  }
`;

export const Error = styled.div`
  color: #fc8181;
  font-size: 0.75rem;
  text-align: left;
  margin-top: 0.25rem;
`;
