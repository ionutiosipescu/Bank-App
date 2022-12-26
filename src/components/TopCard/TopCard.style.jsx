import styled from "styled-components";

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
  & > div {
    margin-right: 20px;
  }
  @media (max-width: 1635px) {
    & > div {
      margin-right: 5px;
    }
  } ;
`;

export const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.primary ? "var(--purple)" : "var(--blue)"};
`;

export const CardFeature = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardBody = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  /* padding-bottom: 10px; */
`;
