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
import Button from "./../../../../../components/UI/Button/Button";
import avatar from "./../../../../../assets/images/avatar-2.png";
import { useSelector } from "react-redux";
import { selectDetailTransfer } from "../../../../../state-management/Dashboard/services/helpers/transfersHelper/transferHelper.selector";

//////////////////////////
import jsPDF from "jspdf";
import "jspdf-autotable";
import TransferPDF from "../../../../../components/Test/Test";

function TransferDetails() {
  const detailTransfer = useSelector(selectDetailTransfer);
  const {
    date,
    details,
    from_sender_name,
    id,
    to_account_id,
    to_receiver_name,
    transfer,
  } = detailTransfer;

  console.log(detailTransfer);

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
            <p>{to_receiver_name} nume_familie</p>
            <h3>Strada Arborelui 22.</h3>
          </span>
        </UserProfile>
        <UserInfo>
          <span>
            <p>Email</p>
            <h3>receiver_email@gmail.com</h3>
          </span>
          <span>
            <p>Phone</p>
            <h3>receiver_number</h3>
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
              <h3>EUR</h3>
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo est
          debitis, sunt numquam obcaecati quaerat explicabo. Mollitia dicta
          quasi recusandae! Lorem ipsum dolor sit amet.
        </p>
      </TransactionDetailsInfo>
      {/* <TransferPDF /> */}
    </TransferDetailsCard>
  );
}

export default TransferDetails;

////////////////////////////////

// {
//   date: "2023-02-15";
//   details: "Payment for the phone you sold me";
//   from_sender_name: "Alex";
//   id: 537;
//   to_account_id: 34;
//   to_receiver_name: "Alex";
//   transfer: 744;
// }
