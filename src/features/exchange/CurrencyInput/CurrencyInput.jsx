import "./CurrencyInput.css";

function CurrencyInput(props) {
  return (
    <div className="group">
      <input
        type="text"
        name="amount"
        value={props.amount}
        onChange={(ev) => {
          props.onAmountChange(ev.target.value);
          props.setData(ev);
        }}
      />
      <select
        name="currency"
        value={props.currency}
        onChange={(ev) => {
          props.onCurrencyChange(ev.target.value);
          props.setData(ev);
        }}
      >
        {props.currencies.map((currency, index) => (
          <option key={index} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyInput;
