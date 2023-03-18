import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Fallback from "../../../../../../components/Fallback/Fallback";
import { CardHeader } from "../../../../../../components/TopCard/TopCard.style";
import { ServiceViewCard } from "../../../../../../components/UI/Card/Card.style";
import LabelList from "../../../../../../components/UI/LabelList/LabelList";
import LinkButton from "../../../../../../components/UI/LinkButton/LinkButton.tsx";
import SmallDropdown from "../../../../../../features/cardsPage/Dropdown/Dropdown";
import { SelectAccountToggle } from "../../../../../../features/deposits/DepositsControlerCard/DepositControlerCard.style";
import { DateContainer } from "../../../../../../features/exchange/ExchangeList/ExchangeList.style";
import {
  AmountContainer,
  IdList,
  ListContainer,
  ListItem,
} from "../../../../../../features/savings/SavingsListCard/SavingsListCard.style";
import TransfersAllPDF from "../../../../../../features/transfers/TransfersAllPDF/TransfersAllPDF";
import {
  setDetailTransfer,
  setSelectedOptionTransfer,
} from "../../../../../../state-management/Dashboard/services/transfer/transfer.action";
import {
  selectOptionTransfer,
  selectTransferArr,
} from "../../../../../../state-management/Dashboard/services/transfer/transfer.selector";
import { accounts } from "../../../../../../utils/data/dummyData";
import {
  ListItemSectionTransfer,
  UserContainerTransfer,
} from "../HistoryViewTransfers.style";

function TransfersListCard() {
  const dispatch = useDispatch();
  const transferOption = useSelector(selectOptionTransfer);
  const transferArr = useSelector(selectTransferArr);

  const options = [
    { value: "ron", label: "RON" },
    { value: "euro", label: "EUR" },
  ];

  return (
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
          <TransfersAllPDF />
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
                  <h3>{`${transfer.from_sender_name} \u2192 ${transfer.to_receiver_name}`}</h3>
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
                  to={`/services/transfers/transferdetails/${transfer.id}`}
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
  );
}

export default TransfersListCard;
