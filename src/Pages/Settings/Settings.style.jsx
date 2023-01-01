import styled from "styled-components";

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: calc(100% - 60px);
  height: calc(100vh - 142px);
  border-radius: 50px;
  margin: 20px 30px 20px 0px;
  padding: 50px;
  background-color: var(--white);
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
  & h2 {
    margin-bottom: 50px;
  }
  @media (max-width: 1440px) {
    height: fit-content;
    & h2 {
      margin-bottom: 20px;
    }
    padding: 30px;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media (max-width: 1440px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PreferenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  height: 100%;
  margin-right: 100px;
  padding-bottom: 40px;
  border-right: 2px solid #8e8ea170;
  @media (max-width: 1440px) {
    width: 90%;
    margin: 0;
    padding: 0;
    border-right: none;
    border-bottom: 2px solid #8e8ea170;
  }
`;

export const SettingsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 0px 30px;
  @media (max-width: 1440px) {
    flex-direction: row;
    margin: 0;
  }
`;

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 70%;
  padding-bottom: 30px;
  @media (max-width: 1440px) {
    width: 90%;
    height: 368px;
    margin: 20px 0 30px 0;
    padding: 0;
  }
`;

export const RowSettingsSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  @media (max-width: 1440px) {
    justify-content: space-between;
  }
`;
