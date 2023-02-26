import React, { useState, useEffect, useRef, forwardRef } from "react";
import {
  NotificationCard,
  NotificationsBody,
  NotificationsHeader,
} from "./Notification.style";
import { accounts } from "../../../utils/data/dummyData";
import NotificationItem from "./../NotificationItem/NotificationItem";
import { useSelector, useDispatch } from "react-redux";
import { selectNotificationArr } from "../../../state-management/Dashboard/dashboard/dashboard.selector";
import { selectRedDot } from "../../../state-management/Dashboard/dashboard/dashboard.selector";
import { setRedDot } from "../../../state-management/Dashboard/dashboard/dashboard.action";

function Notification({ status, ...props }) {
  // const dispatch = useDispatch();
  // const redDot = useSelector(selectRedDot);
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
