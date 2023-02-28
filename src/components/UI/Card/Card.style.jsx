import styled from "styled-components";
import { device } from "../../../utils/breakpoints/breakpoints";

export const CardContainer = styled.div`
  z-index: 1;
  width: 13vw;
  aspect-ratio: 8/5;
  /* height: 40vh; */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ${(props) =>
    props.scale === "sm"
      ? "border-radius: 12px; padding: 10px; "
      : "border-radius: 40px; padding: 30px;"}
  margin: 15px 30px 15px 0;
  overflow: hidden;
  box-shadow: 0px 0px 20px -5px rgba(21, 20, 47, 0.73);
  background-color: ${(props) =>
    props.color == "purple"
      ? "var(--purple)"
      : props.color == "yellow"
      ? "var(--yellow)"
      : props.currency === "ron"
      ? "var(--purple)"
      : props.currency === "euro"
      ? "var(--blue)"
      : props.currency === "none"
      ? "var(--gray-light)"
      : "var(--white)"};
  color: ${(props) =>
    props.currency == "ron" || props.currency == "euro"
      ? "var(--text-light)"
      : "var(--text)"};
  ${(props) =>
    props.size === "sm"
      ? "width: 33vw; aspect-ratio: 8/5;"
      : props.size === "md"
      ? "width: 50vw; aspect-ratio: 16/9;"
      : props.size === "fit"
      ? "width: fit-content; height: fit-content; margin: 0;"
      : "width: 100%; height: 100%;"};
`;

export const CardHeader = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  z-index: 2;
  margin: ${(props) => (props.size === "fit" ? "0" : "0 0 0 20px")};
  h1 {
    /* font-size: ${(props) => (props.size === "fit" ? "25px" : "48px")}; */
  }
  ${(props) =>
    props.flex === "row"
      ? "flex-direction: row; align-items: center;"
      : "flex-direction: column;"};
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-around;
  }
  & > div > div {
    display: flex;
    width: 70px;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
`;

export const ServiceViewCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 60px);
  margin: 10px 30px 30px 0px;
  height: 85vh;
  border-radius: 40px;
  padding: 30px 50px;
  background-color: var(--white);
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
`;

export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: calc(60% - 20px);
  height: 75vh;
  border-radius: 40px;
  padding: 30px 40px;
  background-color: var(--white);
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
  @media (max-width: 1515px) {
    width: 63%;
  }
  @media (max-width: 1439px) {
    width: 100%;
  }
  @media (max-width: 800px) {
    padding: 30px 10px;
    & > div:first-of-type {
      align-items: center;
      justify-content: center;
    }
  }
  @media (max-width: 400px) {
    height: fit-content;
  }
`;

export const ServiceInputsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  border-radius: 40px;
  background-color: var(--white);
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
  /* Media */
  @media (${device.mobileS}) {
    width: 100%;
    height: fit-content;
    align-items: center;
    margin-bottom: 30px;
    padding: 20px 20px;
  }

  @media (${device.tablet}) {
    padding: 30px 40px;
  }
  @media (${device.laptop}) {
    width: 100%;
    align-items: flex-start;
    & > a:last-of-type {
      align-self: flex-end;
    }
  }
  @media (${device.laptopL}) {
    width: 33%;
    height: 85vh;
    margin-bottom: 0;
    align-items: center;
    & > a:last-of-type {
      align-self: center;
    }
  }
  @media (${device.desktop}) {
    width: calc(40% - 20px);
    height: 75vh;
    margin-bottom: 0;
    align-items: center;
    & > a:last-of-type {
      align-self: center;
    }
  }
`;

// refactor please separate div style!
export const ServiceInputsCardLoans = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  aspect-ratio: 3/4;
  border-radius: 40px;
  padding: 30px 40px;
  background-color: var(--white);
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
  /* Media */
  @media (${device.mobileS}) {
    width: 100%;
    height: 80vh;
    align-items: center;
    margin-bottom: 30px;
  }
  @media (${device.mobileL}) {
    ${(props) =>
      props.type === "exchange"
        ? "height: 90vh;"
        : props.type === "savings"
        ? "height: 80vh;"
        : "height: 90vh;"}
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
  @media (${device.tablet}) {
    ${(props) =>
      props.type === "exchange"
        ? "height: 70vh;"
        : props.type === "savings"
        ? "height: 60vh;"
        : "height: 90vh;"}
  }
  @media (${device.laptop}) {
    width: 100%;
    height: 70vh;
    align-items: flex-start;
    & > a:last-of-type {
      align-self: flex-end;
    }
  }
  @media (${device.laptopL}) {
    width: 33%;
    height: 85vh;
    margin-bottom: 0;
    align-items: center;
    & > a:last-of-type {
      align-self: center;
    }
  }
  @media (${device.desktop}) {
    width: calc(40% - 20px);
    height: 75vh;
    margin-bottom: 0;
    align-items: center;
    & > a:last-of-type {
      align-self: center;
    }
  }
`;

// refactor also here please separate div style!
export const ServiceInputsCardDeposit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  aspect-ratio: 3/4;
  border-radius: 40px;
  padding: 30px 40px;
  background-color: var(--white);
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
  /* Media */
  @media (${device.mobileS}) {
    width: 100%;
    height: 80vh;
    align-items: center;
    margin-bottom: 30px;
  }
  @media (${device.mobileL}) {
    ${(props) =>
      props.type === "exchange"
        ? "height: 90vh;"
        : props.type === "savings"
        ? "height: 80vh;"
        : "height: 90vh;"}
    & > div {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      height: auto;
    }
  }
  @media (${device.tablet}) {
    ${(props) =>
      props.type === "exchange"
        ? "height: 70vh;"
        : props.type === "savings"
        ? "height: 60vh;"
        : "height: 90vh;"}
  }
  @media (${device.laptop}) {
    width: 100%;
    height: 70vh;
    align-items: flex-start;
    & > a:last-of-type {
      align-self: flex-end;
    }
  }
  @media (${device.laptopL}) {
    width: 33%;
    height: 85vh;
    margin-bottom: 0;
    align-items: center;
    & > a:last-of-type {
      align-self: center;
    }
  }
  @media (${device.desktop}) {
    width: calc(40% - 20px);
    height: 75vh;
    margin-bottom: 0;
    align-items: center;
    & > a:last-of-type {
      align-self: center;
    }
  }
`;

export const CornerArt = styled.span`
  position: absolute;
  background-color: var(--purple);
  background: linear-gradient(
    120deg,
    var(--purple-dark) 20%,
    var(--purple) 45%,
    var(--purple-light) 100%
  );
  ${(props) => (props.top ? "top: 0;" : "")}
  ${(props) => (props.bottom ? "bottom: 0;" : "")}
  ${(props) => (props.right ? "right: 0;" : "")}
  ${(props) => (props.left ? "left: 0;" : "")}
  width: 20%;
  height: 20%;
  ${(props) =>
    props.top && props.left
      ? "clip-path: polygon(0 0, 0% 100%, 100% 0);"
      : props.bottom && props.right
      ? "clip-path: polygon(100% 100%, 0% 100%, 100% 0);"
      : props.top && props.right
      ? "clip-path: polygon(100% 0, 100% 100%, 0 0);"
      : props.bottom && props.left
      ? "clip-path: polygon(0 100%, 100% 100%, 0 0);"
      : ""};
`;
