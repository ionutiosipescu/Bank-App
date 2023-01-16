import styled from "styled-components";
import { device } from "../../utils/breakpoints/breakpoints";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
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
      props.active ? "position: absolute; width: 70%;" : "width: 40px;"}
  }
  @media (${device.tablet}) {
    position: relative;
    justify-content: flex-start;
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
  @media (${device.mobileS}) {
    ${(props) => (props.active ? "display: block;" : "display: none;")}
  }
  @media (${device.tablet}) {
    display: block;
    margin-left: 10px;
  }
`;
