import React, { useState, useEffect } from "react";

import { CardsContainer, CarouselContainer } from "./CarouselCards.style";

import BalanceCard from "../BalanceCard/BalanceCard";
import Button from "../UI/Button/Button";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentCardAccount } from "../../state-management/Dashboard/cards/cards.action";
import {
  selectUserAccount,
  selectUserDetail,
} from "../../state-management/Dashboard/userData/userData.selector";

import { generateRandomNumber } from "../../utils/helpers/helperFunctions/randomNumber";
import { cardValidityGenerator } from "./../../utils/helpers/helperFunctions/cardValidityGenerator";
import { selectCardArr } from "../../state-management/Dashboard/cards/cards.selector";

function CarouselCards(props) {
  const { size } = props;

  const dispatch = useDispatch();
  const accountsArr = useSelector(selectCardArr);
  const currentAccount = useSelector(selectUserDetail);
  const { first_name, last_name } = currentAccount;

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = accountsArr.slice(currentIndex, currentIndex + 1);

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(accountsArr.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex === accountsArr.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    dispatch(setCurrentCardAccount(accountsArr[currentIndex]));
  }, [currentIndex]);

  return (
    <CarouselContainer size={size}>
      <Button handleClick={handlePrevClick} size="round">
        <BsArrowLeft />
      </Button>
      <CardsContainer size={size}>
        {itemsToShow.map((account, index) => (
          <BalanceCard
            key={index}
            balance={`${account.balance}`}
            currency={account.currency}
            name={`${first_name} ${last_name}`}
            cardNum={`${generateRandomNumber(4)} ${generateRandomNumber(
              4
            )} ${generateRandomNumber(4)} ${generateRandomNumber(4)}`}
            valid={cardValidityGenerator(account.created_at)}
            scale={size}
          />
        ))}
      </CardsContainer>
      <Button handleClick={handleNextClick} size="round">
        <BsArrowRight />
      </Button>
    </CarouselContainer>
  );
}

export default CarouselCards;
