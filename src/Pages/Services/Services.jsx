import React from "react";
import { ButtonWrapper } from "./Services.style";
import Button from "./../../components/UI/Button/Button";
import { TopContainer } from "./../Cards/Cards.style";
import { SettingsContainer } from "./../Settings/Settings.style";

function Services() {
  return (
    <>
      <ButtonWrapper>
        <Button
          to={"/savings"}
          label="Savings"
          size="xl"
          primary={true}
          onClick={""}
        />
        <Button
          to={"/loans"}
          label="Loans"
          size="xl"
          primary={true}
          onClick={""}
        />
        <Button
          to={"/exchange"}
          label="Exchange"
          size="xl"
          primary={true}
          onClick={""}
        />
        <Button
          to={"/transfers"}
          label="Transfers"
          size="xl"
          primary={true}
          onClick={""}
        />
        <Button
          to={"/deposit"}
          label="Deposit"
          size="xl"
          primary={true}
          onClick={""}
        />
      </ButtonWrapper>
      <TopContainer></TopContainer>
      <SettingsContainer></SettingsContainer>
    </>
  );
}

export default Services;
