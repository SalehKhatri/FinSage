import { React, useState } from "react";
import "./CurrencyConverter.css";
function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState(0);

  const handleInput=(e)=>{
    if(!e.target.value){
      setResult(0);
    }
    setAmount(e.target.value);
    setResult(0)
  }

  const convertCurrency = () => {
    if (currency === "USD") {
      fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`
      )
        .then((data) => data.json())
        .then((data) => setResult((amount * data.usd.inr).toFixed(2)));
      // only showing 2 digits after decimals
    } else {
      fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json`
      )
        .then((data) => data.json())
        .then((data) => setResult((amount*data.inr.usd).toFixed(2)));
    }
  };
  return (
    <div className="converter_container">
      <div className="converter_heading">
        <p>Quick Exchange</p>
        <img src="/Converter_icons/math.svg" />
      </div>
      <div className="converter_centerText">
        <p>You give</p>
        <p>You get</p>
      </div>
      <div className="converter_main">
        <div className="converter_userInput">
          <input
            placeholder="0"
            onChange={handleInput}
            id="inputAmount"
            type="number"
          />
          <select
            defaultValue={currency}
            onChange={(e) => setCurrency(e.target.value)}
            id="inputCurrency"
          >
            <option>USD</option>
            <option>INR</option>
          </select>
        </div>

        <div className="converter_output">
          <input
            id="outputAmount"
            style={{ cursor: "default" }}
            type="number"
            value={result}
            readOnly
          />
          {currency === "USD" ? (
            <input
              style={{ cursor: "default" }}
              id="outputCurrency"
              value={"INR"}
              readOnly
            />
          ) : (
            <input
              style={{ cursor: "default" }}
              id="outputCurrency"
              value={"USD"}
              readOnly
            />
          )}
        </div>
      </div>

      <div className="converter_button">
        <button onClick={convertCurrency}>Confirm Action</button>
      </div>
    </div>
  );
}

export default CurrencyConverter;
