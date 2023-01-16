import styled from "styled-components";
import { device } from "../../../utils/breakpoints/breakpoints";

export const CardContainer = styled.div`
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
    props.size == "sm"
      ? "width: 33vw; aspect-ratio: 8/5;"
      : props.size == "md"
      ? "width: 50vw; aspect-ratio: 16/9;"
      : props.size == "lg"
      ? "width: 100%; height: 100%;"
      : "width: fit-content; height: fit-content;"};
  @media (max-width: 1680px) {
    ${(props) =>
      props.size == "sm"
        ? "width: 33vw; aspect-ratio: 3/2;"
        : props.size == "md"
        ? "width: 50vw; aspect-ratio: 3/2;"
        : props.size == "lg"
        ? "width: 100%; height: 100%;"
        : "width: fit-content; height: fit-content;"};
    margin: 25px 30px 15px 0;
  }
  @media (max-width: 1440px) {
    ${(props) =>
      props.size == "sm"
        ? "width: 33vw; aspect-ratio: 4/3;"
        : props.size == "md"
        ? "width: 50vw; aspect-ratio: 8/5;"
        : props.size == "lg"
        ? "width: 100%; height: 100%;"
        : "width: fit-content; height: fit-content;"};
  }
  @media (max-width: 1024px) {
    ${(props) =>
      props.size == "sm"
        ? "width: 95vw; aspect-ratio: 4/3;"
        : props.size == "md"
        ? "width: 95vw; aspect-ratio: 8/7;"
        : props.size == "lg"
        ? "width: 100%; height: 100%;"
        : "width: fit-content; height: fit-content;"};
    margin: 15px 10px 15px 0;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  width: 100%;
  z-index: 2;
  margin-bottom: 20px;
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

export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(60% - 20px);
  height: 85vh;
  aspect-ratio: 5/4;
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
    height: 110vh;
  }
`;

export const ServiceInputsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  aspect-ratio: 3/4;
  border-radius: 40px;
  padding: 30px 40px;
  background-color: var(--white);
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 90%;
    margin-top: 50px;
  }
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
      justify-content: space-between;
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
    & > div {
      margin-top: 100px;
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
