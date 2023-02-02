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

function CarouselCards(props) {
  const { size } = props;

  const dispatch = useDispatch();
  const accountsArr = useSelector(selectUserAccount);
  const currentAccount = useSelector(selectUserDetail);
  const { first_name, last_name } = currentAccount;

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = accountsArr.slice(currentIndex, currentIndex + 1);

  //   console.log(accountsArr.length);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    dispatch(setCurrentCardAccount(accountsArr[currentIndex]));
  }, [currentIndex]);

  return (
    <CarouselContainer size={size}>
      <Button
        handleClick={handlePrevClick}
        size="round"
        disabled={currentIndex === 0 ? true : false}
      >
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
      <Button
        handleClick={handleNextClick}
        size="round"
        disabled={currentIndex + 1 >= accountsArr.length ? true : false}
      >
        <BsArrowRight />
      </Button>
    </CarouselContainer>
  );
}

export default CarouselCards;
