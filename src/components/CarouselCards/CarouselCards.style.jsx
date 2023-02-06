import styled from "styled-components";

export const CarouselContainer = styled.div`
  height: 100%;
  ${(props) =>
    props.size === "sm" ? "width: 95%; font-size: 0.7rem;" : "width: 40%;"}
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.buttonShow === "true" ? "space-between" : "center"};
  /* justify-content: center; */
`;

export const CardsContainer = styled.div`
  width: 80%;
  aspect-ratio: 8/5;
  ${(props) => (props.size === "sm" ? "& > div { scale: 90%; }" : "")};
`;
