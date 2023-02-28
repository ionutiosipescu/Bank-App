import styled from "styled-components";
import { device } from "../../utils/breakpoints/breakpoints";

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;
  & > p {
    opacity: 0.8;
    margin-bottom: 20px;
  }
  @media (${device.mobileS}) {
    width: 100%;
    height: 120px;
    & > p {
      opacity: 0.8;
      margin-bottom: 10px;
    }
  }
  @media (${device.laptop}) {
    width: max-content;
    & > p {
      margin-bottom: 20px;
    }
  }
  @media (${device.laptopL}) {
    width: 100%;
    & > p {
      margin-bottom: 20px;
    }
  }
  @media (${device.desktop}) {
    width: max-content;
    & > p {
      margin-bottom: 20px;
    }
  }
`;

export const DropDownSelector = styled.div`
  display: flex;
  ${(props) =>
    props.active
      ? "flex-direction: column; align-items: flex-start; border-radius: 30px; padding: 10px 25px 15px 25px;"
      : "height: 60px; border-radius: 30px; padding: 0px 25px; & > p { display: none; }"}

  justify-content: space-between;
  font-weight: 600;
  width: 100%;
  border: 1px solid var(--gray-dark);
`;

export const DropDownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: var(--text);
  cursor: pointer;
`;

export const DropDownItem = styled.p`
  margin: 5px 0;
  cursor: pointer;
  color: var(--text);
  &:hover {
    color: var(--text-light);
  }
`;
