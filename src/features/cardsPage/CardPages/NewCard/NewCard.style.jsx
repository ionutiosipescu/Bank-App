import styled from "styled-components";

export const NewCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 20px 20px 0 0;
  gap: 100px;
  & > div:last-child {
    margin-left: 30px;
  }
`;
