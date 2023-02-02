// import "./CurrencyInput.css";
import React, { useState } from "react";
import {
  Arrow,
  CurrencyInputContainer,
  CurrencySelect,
  Option,
  OptionsContainer,
  SelectContainer,
  SelectedOption,
} from "./CurrencyInput.style";

function CurrencyInput(props) {
  // const [selectedOption, setSelectedOption] = useState(props.currencies[0]);
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <CurrencyInputContainer>
      <input
        type="text"
        name="amount"
        value={props.amount}
        onChange={(ev) => {
          props.onAmountChange(ev.target.value.toLocaleLowerCase());
          props.setData(ev);
        }}
      />
      <CurrencySelect
        name="currency"
        value={props.currency}
        onChange={(ev) => {
          props.onCurrencyChange(ev.target.value.toLocaleLowerCase());
          props.setData(ev);
        }}
      >
        {props.currencies.map((currency, index) => (
          <option key={index} value={currency}>
            {currency.toUpperCase()}
          </option>
        ))}
      </CurrencySelect>

      {/* <SelectContainer>
        <SelectedOption onClick={() => setIsOpen(!isOpen)}>
          {selectedOption}
          <Arrow />
        </SelectedOption>
        {isOpen && (
          <OptionsContainer>
            {props.currencies.map((option) => (
              <Option
                key={option}
                onClick={() => {
                  setSelectedOption(option);
                  props.onChange(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </Option>
            ))}
          </OptionsContainer>
        )}
      </SelectContainer> */}
    </CurrencyInputContainer>
  );
}

export default CurrencyInput;
