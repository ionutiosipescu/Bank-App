import styled from "styled-components";
import Button from "../../../../../components/UI/Button/Button";

export const CardPlansContainer = styled.div`
  height: 100%;
  width: 90%;
  & > h2 {
    margin-bottom: 40px;
    padding: 20px 0 0;
  }
`;

export const FormContainerCard = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  width: 100%;
  padding-bottom: 30px;
  & > h2 {
    margin-bottom: 50px;
  }
`;
export const RowNewCardSection = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  @media (max-width: 1440px) {
    justify-content: space-between;
  }
`;

export const ButtonNewCard = styled(Button)`
  font-size: 18px;
`;
