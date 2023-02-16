import styled from "styled-components";

export const TransferDetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 100px);
  height: 70vh;
  border-radius: 40px;
  margin: 60px 30px 15px 0;
  padding: 30px;
  box-shadow: 0px 0px 20px -5px rgba(21, 20, 47, 0.73);
  & span > h3 {
    margin-top: 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  & > button {
    margin: 0;
  }
`;

export const UserDetails = styled.div`
  display: flex;
  justify-content: space-between;
  & img {
    width: 100px;
    aspect-ratio: 1/1;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  padding-right: 50px;
  border-right: 1px solid var(--gray);
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  padding: 0 20px 0 40px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40%;
  padding: 30px;
`;

export const PaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const TransactionInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: fit-content;
  height: 100%;
  & > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--gray);
  }
  & > div > span {
    min-width: 150px;
    padding-right: 20px;
  }
  & > div > span:first-of-type {
    min-width: 300px;
  }
`;

export const TransactionDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 16%;
  padding: 20px;
  border-radius: 20px;
  background-color: var(--gray);
`;
