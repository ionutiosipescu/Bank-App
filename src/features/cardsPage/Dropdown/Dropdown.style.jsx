import styled from "styled-components";

export const DropdownContainer = styled.div`
  width: fit-content;
  display: inline-block;
`;

export const StyledSelect = styled.select`
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid var(--purple);
  width: 100%;
  margin: 8px 0;
  box-sizing: border-box;
  &:focus {
    outline: 1px solid var(--purple-dark);
  }
`;

export const StyledOption = styled.option`
  font-size: 16px;
  padding: 10px;
`;
