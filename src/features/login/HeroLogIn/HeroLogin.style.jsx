import styled from "styled-components";
import { device } from "../../../utils/breakpoints/breakpoints";

export const HeroCard = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 650px;
  width: 70%;
  background: var(--purple);
  img {
    width: auto;
    height: 100%;
    background: var(--purple);
    margin-right: 30px;
  }
  @media ${device.laptopL} {
    display: flex;
  }
`;

export const HeroArt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
  background: var(--purple);
`;
