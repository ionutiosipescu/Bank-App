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
import { selecttransferStorage } from "../../../state-management/Dashboard/services/transfer/transfer.selector";

import { accounts } from "../../../utils/data/dummyData";

function TransfersRecipientCard() {
  const selectedAccount = useSelector(selecttransferStorage);
  const { image, owner, address, phoneNumber, email } = selectedAccount;
  const defaultUser = accounts[0];

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
          <img src={image || defaultUser.image} alt="" />
          <h1>{owner || defaultUser.owner}</h1>
        </UserTitle>
        <UserDescription>
          <UserSection>
            <Icon>
              <RiMapPinLine size={20} />
            </Icon>
            <DescriptionTitle>
              <h4>Address</h4>
              <p>{address || defaultUser.address}</p>
            </DescriptionTitle>
          </UserSection>
          <UserSection>
            <Icon>
              <RiMailLine size={20} />
            </Icon>
            <DescriptionTitle>
              <h4>Email</h4>
              <p>{email || defaultUser.email}</p>
            </DescriptionTitle>
          </UserSection>
          <UserSection>
            <Icon>
              <RiPhoneLine size={20} />
            </Icon>
            <DescriptionTitle>
              <h4>Phone</h4>
              <p>{phoneNumber || defaultUser.phoneNumber}</p>
            </DescriptionTitle>
          </UserSection>
        </UserDescription>
      </RecipientsContainer>
    </ServiceInputsCard>
  );
}

export default TransfersRecipientCard;
