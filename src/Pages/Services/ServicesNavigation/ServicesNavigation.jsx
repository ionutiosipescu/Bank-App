import React from "react";
import { ButtonWrapper, ServicesWrapper } from "./ServicesNavigation.style";
import LinkButton from "../../../components/UI/LinkButton/LinkButton";

import { Outlet } from "react-router";
import { services } from "../../../utils/data/servicesData";

function ServicesNavigation() {
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
            git
          />
        ))}
      </ButtonWrapper>
      <Outlet />
    </ServicesWrapper>
  );
}

export default ServicesNavigation;
