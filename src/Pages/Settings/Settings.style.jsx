import styled from "styled-components";
import { Form } from "formik";

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: calc(100% - 60px);
  height: fit-content;
  min-height: 84vh;
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
  flex-direction: column;
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
  width: 100%;
  /* height: 70vh; */
  margin-bottom: 50px;
  padding-bottom: 50px;
  /* border-right: 2px solid #8e8ea170; */
  border-bottom: 2px solid var(--gray);
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
  /* flex-direction: column; */
  justify-content: space-around;
  height: 100%;
  margin: 0px 30px;
  & > span > p {
    opacity: 0.8;
  }
  @media (max-width: 1440px) {
    flex-direction: row;
    margin: 0;
  }
`;

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
  width: 100%;
  padding-bottom: 30px;
  @media (max-width: 1440px) {
    width: 90%;
    height: 368px;
    margin: 20px 0 30px 0;
    padding: 0;
  }
`;

export const RowSettingsSection = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  @media (max-width: 1440px) {
    justify-content: space-between;
  }
`;

export const FormCustomSettings = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TitleSettings = styled.h2`
  margin: 0;
`;

export const SettingsFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
