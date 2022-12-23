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
  height: 40px;
  width: ${(props) => (props.small ? "150px" : "310px")};
  border: 1px solid var(--purple);
  border-radius: 40px;
  padding: 0 12px 0 10px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
    border: 2px solid var(--blue);
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
