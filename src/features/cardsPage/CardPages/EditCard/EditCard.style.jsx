import styled from "styled-components";

export const EditCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 20px 20px 0 0;
  gap: 100px;
  & > div:last-child {
    margin-left: 30px;
  }
`;

export const EditControler = styled.div`
  gap: 50px;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;
