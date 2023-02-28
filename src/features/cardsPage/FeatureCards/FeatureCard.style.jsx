import styled from "styled-components";

export const FeatureCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 35%;
  height: 100%;
  padding: 40px;
  color: var(--text-light);
  box-shadow: 0px 0px 15px -6px rgba(21, 20, 47, 0.73);
  ${(props) =>
    props.type === "deposit"
      ? "background-color: var(--green); border-top-left-radius: 40px; border-bottom-left-radius: 40px;"
      : "background-color: var(--red); border-top-right-radius: 40px; border-bottom-right-radius: 40px;"}
`;
