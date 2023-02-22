import React from "react";
import {
  NotificationCard,
  NotificationsBody,
  NotificationsHeader,
} from "./Notification.style";
import { accounts } from "../../../utils/data/dummyData";
import { useState } from "react";
import NotificationItem from "./../NotificationItem/NotificationItem";

function Notification({ status, ...props }) {
  const [read, setRead] = useState(false);

  return (
    <NotificationCard status={status}>
      <NotificationsHeader>
        <h3>Notifications</h3>
      </NotificationsHeader>
      <NotificationsBody>
        {accounts.map((account, index) => (
          <NotificationItem data={account} />
        ))}
      </NotificationsBody>
    </NotificationCard>
  );
}

export default Notification;
