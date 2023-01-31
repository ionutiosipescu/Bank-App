import styled from "styled-components";
import { ErrorMsg } from "../../../../../components/Errors/Auth/ErrorMsg.style";

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 20px 0 0;
`;

export const EditCardError = styled(ErrorMsg)`
  font-size: 25px;
  font-style: bold;
  border: 1px solid red;
  padding: 5px;
`;
