import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
`;

export const NavBarSection = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-right: 12px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  & > img {
    width: 40px;
    height: 40px;
    margin-right: 12px;
    border-radius: 40px;
    border: 1px solid var(--purple);
  }
`;
