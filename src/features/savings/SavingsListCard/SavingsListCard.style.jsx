import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  align-items: flex-start;
  justify-content: start;
  width: 100%;
  height: 100%;
  padding: 10px;
  & > div:nth-child(even) {
    background-color: var(--gray-light);
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 15%;
  padding: 0 15px;
  border-bottom: 1px solid var(--gray-dark);
  & > div,
  & > h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & > div > h3 {
    margin-left: 16px;
  }
  & > div > a {
    margin-left: 10px;
  }
  & > h3:nth-child(1) {
    color: var(--green);
  }
  & > h3:nth-child(3) {
    color: var(--purple);
  }
`;
