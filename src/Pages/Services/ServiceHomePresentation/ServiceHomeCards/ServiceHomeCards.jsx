import React from "react";
import { CardContainer } from "../../../../components/UI/Card/Card.style";
import {
  ChartsWrapper,
  PresentationInfo,
} from "../ServiceHomePresentation.style";

function ServiceHomeCards() {
  return (
    <>
      <ChartsWrapper>
        <CardContainer size="sm">
          <PresentationInfo color="red">
            <span>
              <h2>Fast and secure bank transfers!</h2>
              <br />
              <p>
                Experience a hassle-free banking experience with our reliable
                transfer services.
              </p>
            </span>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/mobile-money-transfer-3494304-2928759.png"
              alt=""
            />
          </PresentationInfo>
        </CardContainer>
        <CardContainer size="sm">
          <PresentationInfo color="yellow">
            <span>
              <h2>Dreams come true with us!</h2>
              <br />
              <p>
                Get a small interest loan in minutes and make yours a reality.
              </p>
            </span>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/loan-documentation-4521459-3783695.png"
              alt=""
            />
          </PresentationInfo>
        </CardContainer>
        <CardContainer size="sm">
          <PresentationInfo color="green">
            <span>
              <h2>Exchange money for free!</h2>
              <br />
              <p>You have 0 fees for any exchange between your accounts.</p>
            </span>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/money-exchange-5379650-4494365.png"
              alt=""
            />
          </PresentationInfo>
        </CardContainer>
      </ChartsWrapper>
      {/*  */}
      <ChartsWrapper>
        <CardContainer size="sm">
          <PresentationInfo color="green-light">
            <span>
              <h2>Save you money for dark days!</h2>
              <br />
              <p>
                With us your money is always safe and you get 3.6% savings rate
                a year!
              </p>
            </span>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/saving-money-for-dream-4635504-3894699.png"
              alt=""
            />
          </PresentationInfo>
        </CardContainer>
        <CardContainer size="sm">
          <PresentationInfo color="blue">
            <span>
              <h2>Withdraw without losing money!</h2>
              <br />
              <p>
                Quick reminder that we have no fees at withdrawals below
                10,000ROn.
              </p>
            </span>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/man-withdrawing-money-online-5718683-4781199.png"
              alt=""
            />
          </PresentationInfo>
        </CardContainer>
        <CardContainer size="sm">
          <PresentationInfo color="red-light">
            <span>
              <h2>We are always one click away!</h2>
              <br />
              <p>
                We offer 24/7 customer support, our collagues are eager to help
                you.
              </p>
            </span>
            <img
              src="https://static.vecteezy.com/system/resources/previews/010/869/741/original/faq-concept-illustration-people-looking-through-magnifying-glass-at-interrogation-point-searching-solutions-useful-information-customer-support-solving-problem-free-png.png"
              alt=""
            />
          </PresentationInfo>
        </CardContainer>
      </ChartsWrapper>
    </>
  );
}

export default ServiceHomeCards;
