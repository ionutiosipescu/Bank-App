import styled from "styled-components";

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  height: 120px;
  cursor: default;
  & > p {
    opacity: 0.8;
    /* margin-bottom: 10px; */
  }
`;

export const DropDownSelector = styled.div`
  display: flex;

  ${(props) =>
    props.active
      ? "flex-direction: column; align-items: flex-start; border-radius: 30px; padding: 10px 25px 15px 25px;"
      : "height: 60px; border-radius: 30px; padding: 0px 25px; & > p { display: none; }"}

  justify-content: space-between;
  font-weight: 600;
  width: 100%;
  margin-top: 20px;

  border: 1px solid var(--gray-dark);
`;

export const DropDownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

export const DropDownItem = styled.p`
  margin: 5px 0;
  cursor: pointer;
  &:hover {
    color: var(--purple);
  }
`;
