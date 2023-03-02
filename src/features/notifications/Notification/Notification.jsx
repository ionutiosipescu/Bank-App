import React, { useState, useEffect, useRef, forwardRef } from "react";
import {
  NotificationBackDrop,
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
import Fallback from "../../../components/Fallback/Fallback";
import { Link } from "react-router-dom";

function Notification({ status, handleClick, ...props }) {
  const transferArr = useSelector(selectNotificationArr);

  return (
    <>
      <NotificationCard status={status}>
        <NotificationsHeader>
          <h3>Notifications</h3>
        </NotificationsHeader>
        <NotificationsBody>
          {transferArr.length > 0 ? (
            <>
              {" "}
              {transferArr.map((account, index) => (
                <Link
                  to={`/services/transfers/transferdetails/${account.id}`}
                  key={index}
                >
                  <NotificationItem data={account} />
                </Link>
              ))}
            </>
          ) : (
            <Fallback text={"No Transfers to display"} />
          )}
        </NotificationsBody>
      </NotificationCard>
      <NotificationBackDrop status={status} onClick={handleClick} />
    </>
  );
}

export default Notification;
