import styled from "styled-components";

export const NewCardAvailableContainer = styled.div`
  border: 1px solid black;
  border-radius: 30px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 30%;
`;

export const Title = styled.h2`
  text-align: center;
  width: 100%;
  color: #333;
  margin: 10px 0 30px;
`;

export const CurrencyBox = styled.div`
  padding: 20px 10px;
  font-size: 30px;
  width: 85%;
  text-align: start;
`;

export const AvailableAccountsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ListContainer = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 85%;
  height: 100%;
  font-size: 20px;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
`;
