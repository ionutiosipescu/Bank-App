import React, { useEffect, useState } from "react";
// Style
import {
  AccountInfoContainer,
  CardsModalContainer,
  DetailsContainer,
  PlanCard,
} from "./CardsModal.style";

// Components
import CarouselCards from "../../../components/CarouselCards/CarouselCards";
import { ButtonNewCard } from "../CardPages/NewCard/NewCardPlans/NewCardPlans.style";

// Data
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCurrentCardEdit } from "../../../state-management/Dashboard/cards/cards.selector";
import { options } from "../../../utils/data/plancardregisterData";
import { fetchEditCardPlan } from "../../../state-management/Dashboard/cards/cards.service";
import { fetchRemoveCard } from "../../../state-management/Dashboard/cards/cards.service";
import { selectCardArr } from "../../../state-management/Dashboard/cards/cards.selector";
import StatusMessage from "../../../components/UI/StatusMessage/StatusMessage";
import { selectCsrf } from "../../../state-management/Auth/login/login.selector";

function CardsModal({ ...props }) {
  const { type } = props;

  const [message, setMessage] = useState(false);

  const dispatch = useDispatch();
  const cardEdit = useSelector(selectCurrentCardEdit);
  const csrf = useSelector(selectCsrf);
  const cardArr = useSelector(selectCardArr);
  const { id } = cardEdit;
  const accountsArr = [cardEdit];
  const { type_of_plan } = cardEdit;
  const { value, price, planName, currency, details } =
    options[
      type_of_plan === "standard" ? 0 : type_of_plan === "premium" ? 1 : 2
    ];

  const handleShow = () => {
    setMessage(!message);
  };

  const handeSave = () => {
    dispatch(fetchEditCardPlan(cardEdit, cardArr, csrf));
    console.log("SAVE");
    handleShow();
  };

  const handeDelete = () => {
    dispatch(fetchRemoveCard(cardEdit, cardArr, csrf));
    console.log("DELETE Page");
    handleShow();
  };

  useEffect(() => {
    console.log(cardEdit);
  }, [cardEdit]);

  return (
    <CardsModalContainer type={type}>
      <h1>{`Are you sure you want to ${
        type === "save" ? "keep this changes" : "delete this account"
      }?`}</h1>
      <AccountInfoContainer>
        <CarouselCards size="sm" cardsArr={accountsArr} page={"editPage"} />
        <DetailsContainer>
          <PlanCard type={type_of_plan}>
            <h2>{`${type_of_plan}`.toUpperCase()}</h2>
            <div>
              {details.slice(0, 3).map((option, index) => (
                <h3 key={index}>{option.name}</h3>
              ))}
              <h3>
                {details[3].name} <span>{details[3].nr}</span>
              </h3>
            </div>
          </PlanCard>
        </DetailsContainer>
      </AccountInfoContainer>
      <h2>
        {type === "save"
          ? `You will be deducted ${price} RON each month starting today`
          : "Your current balance will be transferd to your other account!"}
      </h2>
      {message ? (
        <StatusMessage
          type="success"
          text={
            type === "save"
              ? "your card has been successfully updated!"
              : "your card has been deleted successfully!"
          }
          size="full"
          show={message}
          handleShow={handleShow}
        />
      ) : null}
      <ButtonNewCard
        label={type === "save" ? "Accept" : "Delete"}
        size="xl"
        primary="primary"
        type="button"
        onClick={type === "save" ? handeSave : handeDelete}
      />
    </CardsModalContainer>
  );
}

export default CardsModal;
