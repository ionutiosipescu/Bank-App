import React, { useState } from "react";
import { useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCardAccount } from "../../state-management/Dashboard/cards/cards.action";
import {
  selectUserAccount,
  selectUserDetail,
} from "../../state-management/Dashboard/userData/userData.selector";
import { generateRandomNumber } from "../../utils/helpers/helperFunctions/randomNumber";
import BalanceCard from "../BalanceCard/BalanceCard";
import Button from "../UI/Button/Button";
import { cardValidityGenerator } from "./../../utils/helpers/helperFunctions/cardValidityGenerator";
import { CarouselContainer } from "./CarouselCards.style";

function CarouselCards() {
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
    <CarouselContainer>
      <Button
        handleClick={handlePrevClick}
        size="round"
        disabled={currentIndex === 0 ? true : false}
      >
        <BsArrowLeft />
      </Button>
      <div>
        {itemsToShow.map((account, index) => (
          <BalanceCard
            key={index}
            balance={`${account.balance}`}
            currency={account.currency}
            color="yellow"
            size="sm"
            name={`${first_name} ${last_name}`}
            cardNum={`${generateRandomNumber(16)}`}
            valid={cardValidityGenerator(account.created_at)}
          />
        ))}
      </div>
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
