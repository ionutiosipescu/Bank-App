import React, { useState, useEffect } from "react";

import { CardsContainer, CarouselContainer } from "./CarouselCards.style";

import BalanceCard from "../BalanceCard/BalanceCard";
import Button from "../UI/Button/Button";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentCardAccount } from "../../state-management/Dashboard/cards/cards.action";
import { selectUserDetail } from "../../state-management/Dashboard/userData/userData.selector";

import { generateRandomNumber } from "../../utils/helpers/helperFunctions/randomNumber";
import BalanceCardEmpty from "../BalanceCardEmpty/BalanceCardEmpty";
import { setCurrentCardEdit } from "../../state-management/Dashboard/cards/cards.action";
import { setCurrentCardNew } from "../../state-management/Dashboard/cards/cards.action";

function CarouselCards({ ...props }) {
  const { size, cardsArr, page } = props;
  const dispatch = useDispatch();
  // const accountsArr = useSelector(selectCardArr);
  const currentAccount = useSelector(selectUserDetail);
  const { first_name, last_name } = currentAccount;
  const [currentIndex = 0, setCurrentIndex] = useState(0);
  const itemsToShow = cardsArr.slice(currentIndex, currentIndex + 1);

  useEffect(() => {
    console.log(itemsToShow);
  }, []);

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(cardsArr.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex === cardsArr.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    switch (page) {
      case "editPage":
        dispatch(setCurrentCardEdit(cardsArr[currentIndex]));
      case "NewPage":
        dispatch(setCurrentCardNew(cardsArr[currentIndex]));
      default:
        dispatch(setCurrentCardAccount(cardsArr[currentIndex]));
    }
  }, [currentIndex]);

  // useEffect(() => {
  //   switch (selectedOption) {
  //     case "New Account":
  //       setSelectedComponent(<NewCard />);
  //       break;
  //     case "Edit Account":
  //       setSelectedComponent(<EditCard />);
  //       break;
  //     default:
  //       setSelectedComponent(<EditCard />);
  //   }
  // }, [selectedOption]);

  return (
    <CarouselContainer
      size={size}
      buttonShow={cardsArr.length >= 2 ? "true" : "false"}
    >
      {cardsArr.length >= 2 ? (
        <Button handleClick={handlePrevClick} size="round">
          <BsArrowLeft />
        </Button>
      ) : (
        <></>
      )}

      <CardsContainer size={size}>
        {itemsToShow.length === 0 ? (
          <BalanceCardEmpty currency={"none"} />
        ) : (
          <>
            {itemsToShow.map((account, index) => (
              <BalanceCard
                key={index}
                balance={`${account.balance}`}
                currency={account.currency}
                name={`${first_name} ${last_name}`}
                cardNum={`${generateRandomNumber(4)} ${generateRandomNumber(
                  4
                )} ${generateRandomNumber(4)} ${generateRandomNumber(4)}`}
                valid={account.created_at}
                scale={size}
              />
            ))}
          </>
        )}
      </CardsContainer>
      {cardsArr.length >= 2 ? (
        <Button handleClick={handleNextClick} size="round">
          <BsArrowRight />
        </Button>
      ) : (
        <></>
      )}
    </CarouselContainer>
  );
}

export default CarouselCards;
