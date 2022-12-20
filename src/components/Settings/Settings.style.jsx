import styled from "styled-components";

export const SettingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  width: 1600px;
  height: 800px;
  border-radius: 50px;
  margin-top: 25px;
  background-color: var(--white);
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
`;

export const PreferenceContainer = styled.div`
  width: 30%;
  margin-right: 100px;
  border-right: 2px solid #8e8ea170;
`;
export const AccountContainer = styled.div`
  width: calc(70% - 100px);
`;
