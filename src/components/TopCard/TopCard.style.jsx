import styled from "styled-components";

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isPrimary ? "var(--purple)" : "var(--blue)"};
`;

export const CardFeature = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardBody = styled.div`
  width: 100%;
  margin: 10px 0px 10px 0px;
`;
