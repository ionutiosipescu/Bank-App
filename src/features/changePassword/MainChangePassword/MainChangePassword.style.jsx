import styled from "styled-components";
import { device } from "../../../utils/breakpoints/breakpoints";

export const ChangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60%;
  padding: 1rem;
  p {
    text-align: center;
  }
  @media ${device.laptop} {
    width: 60%;
    padding: 2rem;
    height: 100%;
  }
`;

export const BoxControler = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
