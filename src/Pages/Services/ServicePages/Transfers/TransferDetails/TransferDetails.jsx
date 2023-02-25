import React, { useEffect, useRef } from "react";
import {
  Header,
  TransferDetailsCard,
  UserDetails,
  DetailsContainer,
  UserInfo,
  UserProfile,
  PaymentInfo,
  TransactionInfo,
  TransactionDetailsInfo,
} from "./TransferDetails.style";
import avatar from "./../../../../../assets/images/avatar-2.png";
import { useSelector } from "react-redux";
import {
  selectDetailTransfer,
  selectOptionTransfer,
} from "../../../../../state-management/Dashboard/services/transfer/transfer.selector";

//////////////////////////
import TransferPDF from "../../../../../features/transfers/TransferPDF/TransferPDF";
import { selectCurrentUser } from "./../../../../../state-management/Dashboard/userData/userData.selector";

function TransferDetails() {
  const detailTransfer = useSelector(selectDetailTransfer);
  const currentUserData = useSelector(selectCurrentUser);
  const option = useSelector(selectOptionTransfer);
  const { address, country, first_name, last_name, mobile } =
    currentUserData.userDetail;

  const { date, details, transfer } = detailTransfer;

  return (
    <TransferDetailsCard>
      <Header>
        <h2>Transaction Details</h2>
        <TransferPDF />
      </Header>
      <UserDetails>
        <UserProfile>
          <span>
            <img src={avatar} alt="" />
          </span>
          <span>
            <h2>
              {first_name} {last_name}
            </h2>
            <br />
            <p>{address}</p>
          </span>
        </UserProfile>
        <UserInfo>
          <span>
            <p>Email</p>
            <h3>{currentUserData.email}</h3>
          </span>
          <span>
            <p>Phone</p>
            <h3>{mobile}</h3>
          </span>
          <span>
            <p>Location</p>
            <h3>
              {`${country}`.charAt(0).toUpperCase() + `${country}`.slice(1)}
            </h3>
          </span>
        </UserInfo>
      </UserDetails>
      <DetailsContainer>
        <PaymentInfo>
          <span>
            <p>Payment Type</p>
            <h3>Debit Card</h3>
          </span>
          <span>
            <p>Date</p>
            <h3>{date}</h3>
          </span>
        </PaymentInfo>
        <TransactionInfo>
          <div>
            <span>
              <p>Amount</p>
              <h3>{transfer}</h3>
            </span>
            <span>
              <p>Currency</p>
              <h3>{`${option.account}`.toUpperCase()}</h3>
            </span>
            <span>
              <p>Comission</p>
              <h3>3.2%</h3>
            </span>
          </div>
          <span>
            <p>Details</p>
            <h3>{details}</h3>
          </span>
        </TransactionInfo>
      </DetailsContainer>
      <TransactionDetailsInfo>
        <p>Note: </p>
        <p>
          Security is very importtant to our customers. If you have any concerns
          about this transfer or suspect any fraudulent activity, please contact
          our customer support team immediately.
        </p>
      </TransactionDetailsInfo>
    </TransferDetailsCard>
  );
}

export default TransferDetails;
