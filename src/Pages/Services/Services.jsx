import React from "react";
import { ButtonWrapper, ServicesWrapper } from "./Services.style";
import { TopContainer } from "./../Cards/Cards.style";
import LinkButton from "../../components/UI/LinkButton/LinkButton";

import { services } from "../../utils/data/servicesData";

function Services() {
  return (
    <ServicesWrapper>
      <ButtonWrapper>
        {services.map((service, index) => (
          <LinkButton
            to={service.path}
            label={service.label}
            size="xl"
            primary
            key={index}
          />
        ))}
      </ButtonWrapper>
    </ServicesWrapper>
  );
}

export default Services;
