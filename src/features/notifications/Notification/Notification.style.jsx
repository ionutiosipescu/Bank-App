import styled from "styled-components";

export const NotificationCard = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 20vw;
  max-height: 80vh;
  overflow: auto;
  border-radius: 10px;
  padding: 20px 0 0 20px;
  background-color: var(--white-dark);
  color: var(--text);
  box-shadow: 0px 0px 20px -5px rgba(21, 20, 47, 0.73);
  z-index: 3;
  display: ${(props) => (props.status ? "block" : "none")};
`;

export const NotificationsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const NotificationsBody = styled.div`
  width: 100%;
  overflow: scroll;
`;

export const NotificationItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  margin: 10px 0 10px 0;
  padding: 10px;
  border-radius: 10px;
`;

export const NotificationItemImage = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 16px;
  & > img {
    width: 100%;
    object-fit: cover;
  }
`;

export const NotificaionItemBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 50px);
  height: 50px;
  color: var(--text);
  & h4 span {
    font-weight: 800;
    color: var(--purple-dark);
  }
  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const NotificationBackDrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 95vh;
  display: ${(props) => (props.status ? "block" : "none")};
  /* background-color: var(--red); */
  z-index: 2;
`;
