import React from "react";
import LinkButton from "../../../../../../components/UI/LinkButton/LinkButton";
import { NewContainer } from "../../../../../Cards/Cards.style";
import {
  NewTransferCard,
  RecentUserContainer,
} from "../HistoryViewTransfers.style";
import UserCard from "../../../../../../components/UserCard/UserCard";

import { accounts } from "../../../../../../utils/data/dummyData";

function RecentUsers({ dataServices, ...props }) {
  return (
    <NewContainer>
      <RecentUserContainer>
        {accounts.slice(0, 3).map((account, index) => (
          <UserCard
            key={index}
            name={account.owner}
            email={account.email}
            phone={account.phoneNumber}
            image={account.image}
            to="/services/transfers/newtransfer"
          />
        ))}
        <NewTransferCard>
          <LinkButton to={dataServices.path} primary="primary" size="md">
            New Transfer
          </LinkButton>
        </NewTransferCard>
      </RecentUserContainer>
    </NewContainer>
  );
}

export default RecentUsers;
