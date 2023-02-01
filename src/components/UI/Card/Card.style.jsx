import styled from "styled-components";
import { device } from "../../../utils/breakpoints/breakpoints";

export const CardContainer = styled.div`
  z-index: 1;
  min-height: 215px;
  min-width: 345px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 40px;
  margin: 15px 30px 15px 0;
  padding: 30px;
  overflow: hidden;
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
  background-color: ${(props) =>
    props.color == "purple"
      ? "var(--purple)"
      : props.color == "yellow"
      ? "var(--yellow)"
      : "var(--white)"};
  color: ${(props) =>
    props.color == "purple" || props.color == "yellow"
      ? "var(--white)"
      : "var(--text)"};
  ${(props) =>
    props.size === "sm"
      ? "width: 33vw; aspect-ratio: 8/5;"
      : props.size === "md"
      ? "width: 50vw; aspect-ratio: 16/9;"
      : props.size === "fit"
      ? "width: fit-content; height: fit-content; margin: 0;"
      : "width: 100%; height: 100%;"};
  @media (max-width: 1680px) {
    ${(props) =>
      props.size === "sm"
        ? "width: 33vw; aspect-ratio: 3/2;"
        : props.size === "md"
        ? "width: 50vw; aspect-ratio: 3/2;"
        : props.size === "fit"
        ? "width: fit-content; height: fit-content;"
        : "width: 100%; height: 100%;"};
    margin: 25px 30px 15px 0;
  }
  @media (max-width: 1440px) {
    ${(props) =>
      props.size === "sm"
        ? "width: 33vw; aspect-ratio: 4/3;"
        : props.size === "md"
        ? "width: 50vw; aspect-ratio: 8/5;"
        : props.size === "fit"
        ? "width: fit-content; height: fit-content;"
        : "width: 100%; height: 100%;"};
  }
  @media (max-width: 1024px) {
    ${(props) =>
      props.size === "sm"
        ? "width: 95vw; aspect-ratio: 4/3;"
        : props.size === "md"
        ? "width: 95vw; aspect-ratio: 8/7;"
        : props.size === "fit"
        ? "width: fit-content; height: fit-content;"
        : "width: 100%; height: 100%;"};
    margin: 15px 10px 15px 0;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  z-index: 2;
  margin: ${(props) => (props.size === "fit" ? "0" : "0 0 0 20px")};
  h1 {
    font-size: ${(props) => (props.size === "fit" ? "25px" : "48px")};
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
  align-items: center;
  width: calc(100% - 60px);
  height: 85vh;
  border-radius: 40px;
  padding: 30px 20px;
  background-color: var(--white);
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
`;

export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(60% - 20px);
  height: 85vh;
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
    height: 85vh;
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
    height: 85vh;
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
    height: 85vh;
    margin-bottom: 0;
    align-items: center;
    & > a:last-of-type {
      align-self: center;
    }
  }
`;
