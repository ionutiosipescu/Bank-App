import React, { useEffect } from "react";
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
import Button from "./../../../../../components/UI/Button/Button";
import avatar from "./../../../../../assets/images/avatar-2.png";
import { useSelector } from "react-redux";
import { selectDetailTransfer } from "../../../../../state-management/Dashboard/services/helpers/transfersHelper/transferHelper.selector";

function TransferDetails() {
  const detailTransfer = useSelector(selectDetailTransfer);

  return (
    <TransferDetailsCard>
      <Header>
        <h2>Transaction Details</h2>
        <Button size="md" primary="primary">
          Download pdf
        </Button>
      </Header>
      <UserDetails>
        <UserProfile>
          <span>
            <img src={avatar} alt="" />
          </span>
          <span>
            <p>Name Name</p>
            <h3>Lorem ipsum dolor sit amet.</h3>
          </span>
        </UserProfile>
        <UserInfo>
          <span>
            <p>Email</p>
            <h3>email@gmail.com</h3>
          </span>
          <span>
            <p>Phone</p>
            <h3>0757299313</h3>
          </span>
          <span>
            <p>Location</p>
            <h3>Romania</h3>
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
            <h3>2023-12-23</h3>
          </span>
        </PaymentInfo>
        <TransactionInfo>
          <div>
            <span>
              <p>Details</p>
              <h3>My part of the rent.</h3>
            </span>
            <span>
              <p>Amount</p>
              <h3>8377</h3>
            </span>
            <span>
              <p>Currency</p>
              <h3>RON</h3>
            </span>
            <span>
              <p>Comission</p>
              <h3>3.2%</h3>
            </span>
          </div>
          <div>
            <span>
              <p>Details</p>
              <h3>Multe datorii! </h3>
            </span>
            <span>
              <p>Comission</p>
              <h3>3.2%</h3>
            </span>
            <span>
              <p>Comission</p>
              <h3>3.2%</h3>
            </span>
            <span>
              <p>Comission</p>
              <h3>3.2%</h3>
            </span>
          </div>
        </TransactionInfo>
      </DetailsContainer>
      <TransactionDetailsInfo>
        <p>Note: </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo est
          debitis, sunt numquam obcaecati quaerat explicabo. Mollitia dicta
          quasi recusandae! Lorem ipsum dolor sit amet.
        </p>
      </TransactionDetailsInfo>
    </TransferDetailsCard>
  );
}

export default TransferDetails;
