import styled from "styled-components";
import { device } from "../../../utils/breakpoints/breakpoints";

export const SuccesLinkContainer = styled.div`
  flex-direction: column;
  display: flex;
  gap: 20px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border: 1px solid var(--purple);
  border-radius: 20px;
  h5 {
    font-size: 15px;
  }
  a {
    font-size: 20px;
    color: var(--white);
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const SuccesLinkBtn = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--purple);
  padding: 30px;
  display: flex;
  border-radius: 0 0 20px 20px;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    border-radius: 0 20px 20px 0;
    width: unset;
  }
`;
export const SuccesLinkTitle = styled.div`
  text-align: center;
  padding: 20px 20px 0;
  @media ${device.laptop} {
    padding: 30px 0 30px 30px;
  }
`;
