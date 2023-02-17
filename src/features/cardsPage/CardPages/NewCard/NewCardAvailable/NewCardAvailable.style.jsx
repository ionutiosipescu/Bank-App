import styled, { keyframes } from "styled-components";

const rotBGimg = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const NewCardAvailableContainer = styled.div`
  position: relative;
  /* place-content: center; */
  /* place-items: center; */
  min-height: 645px;
  overflow: hidden;
  border: 1px solid black;
  border-radius: 30px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 35%;
  ::before {
    /* z-index: -1; */
    content: "";
    position: absolute;
    width: 100px;
    background-image: linear-gradient(
      180deg,
      rgb(0, 183, 255),
      rgb(255, 48, 255)
    );
    height: 130%;
    animation: ${rotBGimg} 3s linear infinite;
    transition: all 0.2s linear;
  }
  ::after {
    /* z-index: -1; */
    content: "";
    position: absolute;
    background: #fff;
    inset: 5px;
    border-radius: 25px;
  }
`;

export const Title = styled.h2`
  z-index: 1;
  text-align: center;
  width: 100%;
  color: #333;
  margin: 10px 0 30px;
`;

export const BoxContainerHeader = styled.div`
  display: flex;
  z-index: 1;
  padding: 20px 10px;
  width: 85%;
  justify-content: flex-start;
  gap: 50px;
  font-size: 30px;
`;

export const CurrencyBox = styled.div``;
export const PlanBox = styled.div``;
export const EmptyText = styled.h3`
  z-index: 1;
  width: 85%;
  padding: 30px 10px;
`;

export const AvailableAccountsContainer = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ListContainer = styled.ul`
  z-index: 1;
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
  z-index: 1;
  display: flex;
  gap: 15px;
`;

export const ListItemDefault = styled.li`
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

export const ButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 30px;
`;
