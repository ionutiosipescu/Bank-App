import styled from "styled-components";
import { device } from "../../utils/breakpoints/breakpoints";

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  & * {
    transition: 0.3s;
  }
  @media (${device.mobileS}) {
    & img {
      width: 50px;
      aspect-ratio: 1/1;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
