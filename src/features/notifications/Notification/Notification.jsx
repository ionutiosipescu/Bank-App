import React from "react";
import {
  NotificationCard,
  NotificationsBody,
  NotificationsHeader,
} from "./Notification.style";
import { accounts } from "../../../utils/data/dummyData";
import { useState } from "react";
import NotificationItem from "./../NotificationItem/NotificationItem";
import { useSelector } from "react-redux";
import { selectTransferArr } from "../../../state-management/Dashboard/services/transfer/transfer.selector";

function Notification({ status, ...props }) {
  const transferArr = useSelector(selectTransferArr);

  return (
    <NotificationCard status={status}>
      <NotificationsHeader>
        <h3>Notifications</h3>
      </NotificationsHeader>
      <NotificationsBody>
        {transferArr.map((account, index) => (
          <NotificationItem data={account} />
        ))}
      </NotificationsBody>
    </NotificationCard>
  );
}

export default Notification;
