import styled from "styled-components";
import { device } from "../../../utils/breakpoints/breakpoints";

export const FooterContainer = styled.div`
  ${(props) => {
    console.log(props.passChange);
  }}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: ${(props) =>
    props.passChange === "passChange" ? "20px" : "50px"};
  @media ${device.mobileL} {
    flex-direction: row;
    gap: 20px;
  }
`;
