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
