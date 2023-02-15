import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #00000042;
  z-index: 20;
  ${(props) => (props.opened ? "" : "display: none;")}
`;

export const ModalCard = styled.div`
  /* width: 50vw; */
  /* height: 70vh; */
  border-radius: 30px;
  background-color: var(--white);
  overflow: hidden;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 30px;
  & > button {
    position: absolute;
    top: 1%;
    left: 93%;
  }
`;
