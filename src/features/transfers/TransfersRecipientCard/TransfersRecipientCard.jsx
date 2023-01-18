import React, { useEffect } from "react";
import { RiMailLine, RiMapPinLine, RiPhoneLine } from "react-icons/ri";
import Carousel from "../../../components/Carousel/Carousel";
import { Icon } from "../../../components/ProfileComponent/ProfileComponent.style";
import {
  CardHeader,
  ServiceInputsCard,
} from "../../../components/UI/Card/Card.style";

import {
  DescriptionTitle,
  RecipientsContainer,
  UserDescription,
  UserSection,
  UserTitle,
} from "./TransfersRecipientCard.style";

import { useSelector } from "react-redux";
import { selectTransferHelper } from "../../../state-management/Dashboard/services/helpers/transfersHelper/transferHelper.selector";

import { accounts } from "../../../utils/data/dummyData";

function TransfersRecipientCard() {
  const selectedAccount = useSelector(selectTransferHelper);
  const { image, owner, address, phoneNumber, email } = selectedAccount;

  useEffect(() => {
    console.log(selectedAccount);
  }, [selectedAccount]);

  return (
    <ServiceInputsCard>
      <CardHeader>
        <h2>Recent Recipient</h2>
      </CardHeader>
      <RecipientsContainer>
        <Carousel items={accounts} itemsNumber={3} />
        <UserTitle>
          <img src={image} alt="" />
          <h1>{owner}</h1>
        </UserTitle>
        <UserDescription>
          <UserSection>
            <Icon>
              <RiMapPinLine size={20} />
            </Icon>
            <DescriptionTitle>
              <h4>Address</h4>
              <p>{address}</p>
            </DescriptionTitle>
          </UserSection>
          <UserSection>
            <Icon>
              <RiMailLine size={20} />
            </Icon>
            <DescriptionTitle>
              <h4>Email</h4>
              <p>{email}</p>
            </DescriptionTitle>
          </UserSection>
          <UserSection>
            <Icon>
              <RiPhoneLine size={20} />
            </Icon>
            <DescriptionTitle>
              <h4>Phone</h4>
              <p>{phoneNumber}</p>
            </DescriptionTitle>
          </UserSection>
        </UserDescription>
      </RecipientsContainer>
    </ServiceInputsCard>
  );
}

export default TransfersRecipientCard;
