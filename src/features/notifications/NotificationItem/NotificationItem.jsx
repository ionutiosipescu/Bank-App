import React from "react";
import { useState } from "react";
import { accounts, date } from "../../../utils/data/dummyData";
import {
  NotificaionItemBody,
  NotificationItemContainer,
  NotificationItemImage,
} from "../Notification/Notification.style";
import avatar from "../../../assets/images/avatar.png";
import { useSelector } from "react-redux";
import { selectUserAccount } from "../../../state-management/Dashboard/userData/userData.selector";

function NotificationItem({ data, ...props }) {
  const userAccount = useSelector(selectUserAccount);
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
          {userAccount.some((obj) => obj.id === data.account_id) ? (
            <>
              You send a transfer to <span>{data.to_receiver_name}</span>
            </>
          ) : (
            <>
              <span>{data.from_sender_name}</span> sent you a transfer
            </>
          )}
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
