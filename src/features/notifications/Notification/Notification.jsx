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
import { selectNotificationArr } from "../../../state-management/Dashboard/dashboard/dashboard.selector";

function Notification({ status, ...props }) {
  const transferArr = useSelector(selectNotificationArr);

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
