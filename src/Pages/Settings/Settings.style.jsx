import styled from "styled-components";

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 30px 50px;
  width: 1600px;
  height: 800px;
  border-radius: 50px;
  margin-top: 25px;
  background-color: var(--white);
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
`;

export const PreferenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  height: 100%;
  margin-right: 100px;
  border-right: 2px solid #8e8ea170;
`;

export const SettingsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  /* margin-top: 50px; */
`;

export const AccountContainer = styled.div`
  width: calc(70% - 100px);
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
