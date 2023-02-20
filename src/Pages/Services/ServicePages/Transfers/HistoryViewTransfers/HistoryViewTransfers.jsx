import React, { useEffect, useState } from "react";
// Style
import { NewContainer } from "../../../../Cards/Cards.style";
import { CardHeader } from "../../../../../components/TopCard/TopCard.style";
import { ServiceViewCard } from "../../../../../components/UI/Card/Card.style";
import { DateContainer } from "../../../../../features/exchange/ExchangeList/ExchangeList.style";
import {
  AmountContainer,
  ListContainer,
  ListItem,
  IdList,
} from "../../../../../features/savings/SavingsListCard/SavingsListCard.style";
import {
  UserContainerTransfer,
  ListItemSectionTransfer,
  RecentUserContainer,
  NewTransferCard,
  ButtonsTransferBox,
} from "./HistoryViewTransfers.style";

// Components
import LinkButton from "../../../../../components/UI/LinkButton/LinkButton";
import LabelList from "../../../../../components/UI/LabelList/LabelList";
import UserCard from "../../../../../components/UserCard/UserCard";
import Button from "../../../../../components/UI/Button/Button";
import { selectOptionTransfer } from "../../../../../state-management/Dashboard/services/helpers/transfersHelper/transferHelper.selector";
import { setSelectedOptionTransfer } from "../../../../../state-management/Dashboard/services/helpers/transfersHelper/transferHelper.action";
import SmallDropdown from "../../../../../features/cardsPage/Dropdown/Dropdown";
import { SelectAccountToggle } from "../../../../../features/deposits/DepositsControlerCard/DepositControlerCard.style";
// State/Redux

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectTransferArr } from "../../../../../state-management/Dashboard/services/helpers/transfersHelper/transferHelper.selector";
import { setDetailTransfer } from "../../../../../state-management/Dashboard/services/helpers/transfersHelper/transferHelper.action";

// !Dummy Data &  Test Component
import { accounts } from "../../../../../utils/data/dummyData";
import Fallback from "../../../../../components/Fallback/Fallback";

function HisotryViewTransfers({ dataServices }) {
  const dispatch = useDispatch();
  const transferOption = useSelector(selectOptionTransfer);
  const transferArr = useSelector(selectTransferArr);

  const options = [
    { value: "ron", label: "RON" },
    { value: "euro", label: "EUR" },
  ];

  return (
    <>
      <NewContainer>
        <RecentUserContainer>
          {accounts.slice(0, 3).map((account, index) => (
            <UserCard
              key={index}
              name={account.owner}
              email={account.email}
              phone={account.phoneNumber}
              image={account.image}
              to="/dashboard"
            />
          ))}
          <NewTransferCard>
            {/* <img
              src="https://paysend.com/images/how-long-does-it-take-to-transfer-money-1200.png"
              alt=""
            /> */}
            <LinkButton to={dataServices.path} primary="primary" size="md">
              New Transfer
            </LinkButton>
          </NewTransferCard>
        </RecentUserContainer>
      </NewContainer>
      <ServiceViewCard>
        <CardHeader style={{ height: "10%" }}>
          <h2>Transfers</h2>
          <SelectAccountToggle>
            <span>Filter: </span>
            <SmallDropdown
              options={options}
              selectedOption={transferOption?.account}
              handleChange={(e) =>
                dispatch(setSelectedOptionTransfer(e, transferOption))
              }
            />
          </SelectAccountToggle>
        </CardHeader>
        <ListContainer>
          {transferArr.length > 0 ? (
            <>
              {transferArr?.map((transfer, index) => (
                <ListItem key={index}>
                  <ListItemSectionTransfer>
                    <UserContainerTransfer>
                      <img src={accounts[0].image} alt="poza" />
                    </UserContainerTransfer>
                    <h3>{transfer.details}</h3>
                    <IdList> #{transfer.id}</IdList>
                    <AmountContainer>
                      {transfer.transfer}{" "}
                      {`${transferOption.account}`.toUpperCase()}{" "}
                    </AmountContainer>
                    <DateContainer>{transfer.date}</DateContainer>
                    <LabelList status={transfer.status || "Completed"}>
                      {transfer.status || "Completed"}
                    </LabelList>
                  </ListItemSectionTransfer>
                  <LinkButton
                    size="sm"
                    label="Details"
                    primary="primary"
                    to="/services/transfers/transferdetails"
                    handleClick={() => dispatch(setDetailTransfer(transfer))}
                  />
                </ListItem>
              ))}
            </>
          ) : (
            <Fallback
              text={`No Transfer to display. Start by making your first transfer to track your finances. Click the "New Transfer" button to record it.`}
            />
          )}
        </ListContainer>
      </ServiceViewCard>
    </>
  );
}

export default HisotryViewTransfers;
