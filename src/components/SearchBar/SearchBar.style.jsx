import styled from "styled-components";
import { device } from "../../utils/breakpoints/breakpoints";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  width: 600px;
  border-radius: 50px;
  padding: 0px 20px;
  background-color: var(--white);
  box-shadow: 0px 0px 15px -8px rgba(21, 20, 47, 0.73);
  transition: 0.3s;
  @media (${device.mobileS}) {
    justify-content: center;
    height: 40px;
    margin-left: 70px;
    padding: 0;
    border: 1px solid var(--purple);
    ${(props) =>
      props.active === "active"
        ? "position: absolute; width: 70%;"
        : "width: 40px;"}
  }
  @media (${device.tablet}) {
    justify-content: flex-start;
    position: relative;
    width: 250px;
    margin-left: 10px;
    padding-left: 20px;
  }
  @media (${device.laptop}) {
    width: 400px;
  }
  @media (${device.laptopL}) {
    width: 600px;
  }
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;
  height: 100%;
  width: 80%;
  font-size: 1.2rem;
  background-color: var(--white);
  @media (${device.mobileS}) {
    ${(props) =>
      props.active === "active" ? "display: block;" : "display: none;"}
  }
  @media (${device.tablet}) {
    display: block;
    margin-left: 10px;
  }
`;

export const IconInputBox = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchListContainer = styled.div`
  position: absolute;
  background-color: var(--white);
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  top: 110%;
  left: 0;
  z-index: 99;
  box-shadow: 0px 0px 20px -5px rgba(21, 20, 47, 0.73);
  & ul {
    list-style: none;
  }
  & li {
    width: fit-content;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--gray);
  }
  & li a:hover {
    color: var(--green);
  }
  ${(props) => (props.list ? "" : "display: none;")}
`;
