import React from "react";
import { useState } from "react";
import { accounts, date } from "../../../utils/data/dummyData";
import {
  NotificaionItemBody,
  NotificationItemContainer,
  NotificationItemImage,
} from "../Notification/Notification.style";
import avatar from "../../../assets/images/avatar.png";

function NotificationItem({ data, ...props }) {
  const notifDate = date.toDateString();
  const hour = `${date.getHours()} : ${
    (date.getMinutes() < 10 ? "0" : "") + date.getMinutes()
  }`;

  const [isRead, setIsRead] = useState(false);

  return (
    <NotificationItemContainer onClick={() => setIsRead(!isRead)} read={isRead}>
      <NotificationItemImage>
        <img src={avatar} alt="" />
      </NotificationItemImage>
      <NotificaionItemBody>
        <h4>
          <span>{data.from_sender_name}</span> sent you a transfer
        </h4>
        <div>
          <h5>{notifDate}</h5>
          <h5>{hour}</h5>
        </div>
      </NotificaionItemBody>
    </NotificationItemContainer>
  );
}

export default NotificationItem;
