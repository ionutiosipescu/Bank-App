import styled from "styled-components";
import { withRouter } from "storybook-addon-react-router-v6";
import { device } from "../../utils/breakpoints/breakpoints";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-right: 20px;
  @media (${device.mobileS}) {
    justify-content: flex-end;
  }
  @media (${device.tablet}) {
    justify-content: space-between;
  }
`;

export const NavBarSection = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-left: 12px;
  }
  @media (${device.mobileS}) {
    ${(props) => (props.active ? "display: none;" : "display: flex")}
    & > * {
      margin-left: 22px;
    }
  }
  @media (${device.tablet}) {
    display: flex;
    & > * {
      margin-left: 22px;
    }
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  & > img {
    width: 40px;
    height: 40px;
    /* margin-right: 12px; */
    border-radius: 40px;
    border: 1px solid var(--purple);
  }
  @media (${device.mobileS}) {
    & > h2 {
      display: none;
    }
  }
  @media (${device.tablet}) {
    & > h2 {
      display: block;
      margin: 0 15px 0 10px;
    }
  }
`;
