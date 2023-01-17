import React from "react";
import {
  ButtonWrapper,
  ServicesWrapper,
} from "../../pages/Services/Services.style";
import { TopContainer } from "./../Cards/Cards.style";

import Button from "./../../components/UI/Button/Button";
import { Outlet } from "react-router";

function ServicesNavigation() {
  return (
    <ServicesWrapper>
      <ButtonWrapper>
        <Button
          to={"savings"}
          label="Savings"
          size="xl"
          primary={true}
          onClick={""}
        />
        <Button
          to={"exchange"}
          label="Exchange"
          size="xl"
          primary={true}
          onClick={""}
        />
        <Button
          to={"loans"}
          label="Loans"
          size="xl"
          primary={true}
          onClick={""}
        />
        <Button
          to={"transfers"}
          label="Transfers"
          size="xl"
          primary={true}
          onClick={""}
        />
        <Button
          to={"deposit"}
          label="Deposit"
          size="xl"
          primary={true}
          onClick={""}
        />
      </ButtonWrapper>
      {/* <TopContainer></TopContainer>
      <TopContainer></TopContainer> */}
      <Outlet />
    </ServicesWrapper>
  );
}

export default ServicesNavigation;
