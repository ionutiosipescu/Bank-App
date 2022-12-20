import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 50px;
  width: 600px;
  border-radius: 50px;
  padding: 0px 20px;
  background-color: var(--white);
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;
  height: 100%;
  width: 80%;
  font-size: 1.4rem;
`;
