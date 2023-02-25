import React, { useState } from "react";

import Button from "../UI/Button/Button";
import { CarouselContainer, UserContainer } from "./Carousel.style";
import { useDispatch } from "react-redux";
import { fetchTransferAccount } from "../../state-management/Dashboard/services/transfer/transfer.action";

function Carousel({ items, itemsNumber }) {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = items.slice(currentIndex, currentIndex + itemsNumber);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <CarouselContainer>
      <Button
        handleClick={handlePrevClick}
        disabled={currentIndex === 0 ? true : false}
        size="round"
        primary="primary"
      >
        &#8592;
      </Button>
      {itemsToShow.map((item, index) => (
        <UserContainer
          key={index}
          onClick={() => {
            dispatch(fetchTransferAccount(item));
          }}
        >
          <img src={item.image} alt={item.owner} />
          <h4>{item.owner.split(" ")[0]}</h4>
        </UserContainer>
      ))}
      <Button
        handleClick={handleNextClick}
        disabled={currentIndex + 3 >= items.length ? true : false}
        size="round"
        primary="primary"
      >
        &#8594;
      </Button>
    </CarouselContainer>
  );
}

export default Carousel;
