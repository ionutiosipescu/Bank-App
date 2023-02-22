import styled from "styled-components";

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45vh;
  width: calc(100% - 60px);
  margin: 30px 30px 20px 0;
  padding: 30px;
  border-radius: 40px;
  background-color: var(--white);
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
`;

// Services Transfers/Loans View
export const NewContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  /* height: 30vh; */
  width: calc(100% - 60px);
  margin: 30px 30px 30px 0px;
  padding: 30px;
  border-radius: 40px;
  background-color: var(--white);
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
`;
//

export const LeftWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 36%;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 36%);
  height: 100%;
`;

export const FeatureContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50%;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: calc(100% - 60px);
  margin: 30px 30px 20px 0;
  padding: 30px;
  border-radius: 40px;
  background-color: var(--white);
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
`;

export const ManageAccount = styled.div`
  display: flex;
  justify-content: space-between;
`;
