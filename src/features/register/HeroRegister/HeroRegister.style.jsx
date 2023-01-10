import styled from "styled-components";
import { device } from "../../../utils/breakpoints/breakpoints";

export const HeroCard = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  background: var(--purple);

  img {
    width: auto;
    height: 100%;
    background: var(--purple);
    margin-right: 85px;
  }
  @media ${device.laptopL} {
    display: flex;
  }
`;
// Confirm Page
export const HeroCardConfirm = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 850px;
  background: var(--purple);

  img {
    width: auto;
    height: 55%;
    background: var(--purple);
    margin-right: 85px;
  }
  @media ${device.laptopL} {
    display: flex;
  }
`;
