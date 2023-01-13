import React from "react";
import { ButtonWrapper, ServicesWrapper } from "./Services.style";
import { TopContainer } from "./../Cards/Cards.style";

import Button from "./../../components/UI/Button/Button";

function Services() {
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
      <TopContainer></TopContainer>
      <TopContainer></TopContainer>
    </ServicesWrapper>
  );
}

export default Services;
