import styled from "styled-components";

export const CardHeader = styled.div`
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: auto;
  margin-bottom: 5px;
`;

export const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.primary === "primary" ? "var(--purple)" : "var(--blue)"};
`;

export const CardFeature = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90%;
  /* padding-bottom: 10px; */
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
