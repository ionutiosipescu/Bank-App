import styled from "styled-components";

export const ActionModalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: fit-content;
  height: 35vh;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20%;
  margin: 30px 0 10px 0;
  padding-bottom: 20px;
  border-bottom: 2px solid var(--gray);
  & > span {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 150px;
    & > h3 {
      margin: 10px 0 0 0;
    }
  }
`;

// export const DetailsWrapperSecond = styled.div`
//   display: flex;
//   width: 100%;
//   height: 20%;
//   margin: 30px 0 10px 0;
//   border-bottom: 2px solid var(--gray);
//   & > span {
//     display: flex;
//     flex-direction: column;
//     padding-right: 30px;

//     & > h3 {
//       margin-left: 10px;
//     }
//   }
// `;
