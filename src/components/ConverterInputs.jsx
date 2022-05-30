import React, { useState } from 'react';

const ExchangeInputs = ({converterCoins, currency}) => {
  const [oneInput, setOneInput] = useState(0);
  const [twoInput, setTwoInput] = useState(0);
  const [oneDisable, setOneDisable] = useState(false);
  const [twoDisable, setTwoDisable] = useState(false);

  const inputOneChange = (valueOne) => {
    valueOne = valueOne.trim().replace(/[^\d]/g, '');
    valueOne ? setTwoDisable(true) : setTwoDisable(false);
    const valueTwo = parseFloat(exchangeOne(valueOne).toFixed(2));
    setOneInput(valueOne);
    setTwoInput(valueTwo);
  };
  const inputTwoChange = (valueTwo) => {
    valueTwo = valueTwo.trim().replace(/[^\d]/g, '');
    valueTwo ? setOneDisable(true) : setOneDisable(false);
    const valueOne = parseFloat(exchangeTwo(valueTwo).toFixed(2))
    setOneInput(valueOne);
    setTwoInput(valueTwo);
  };

  const exchangeOne = (value) => {
    switch (converterCoins.oneCoin) {
    case 'BTC':
      switch (converterCoins.twoCoin) {
      case 'ETH':
        return value * currency.BTC / currency.ETH; //BTC to ETH
      case 'USD':
        return value * currency.BTC; //BTC to USD
      default:
        return 0;
      }
    case 'ETH':
      switch (converterCoins.twoCoin) {
      case 'BTC':
        return value * currency.ETH / currency.BTC; //ETH to BTC
      case 'USD':
        return value * currency.ETH; //ETH to USD
      default:
        return 0;
      }
    case 'USD':
      switch (converterCoins.twoCoin) {
      case 'BTC':
        return value / currency.BTC; //USD to BTC
      case 'ETH':
        return value / currency.ETH; //USD to ETH
      default:
        return 0;
      }
    default:
      return 0;
    }
  };

  const exchangeTwo = (value) => {
    switch (converterCoins.twoCoin) {
    case 'BTC':
      switch (converterCoins.oneCoin) {
      case 'ETH':
        return value * currency.BTC / currency.ETH; //BTC to ETH
      case 'USD':
        return value * currency.BTC; //BTC to USD
      default:
        return 0;
      }
    case 'ETH':
      switch (converterCoins.oneCoin) {
      case 'BTC':
        return value * currency.ETH / currency.BTC; //ETH to BTC
      case 'USD':
        return value * currency.ETH; //ETH to USD
      default:
        return 0;
      }
    case 'USD':
      switch (converterCoins.oneCoin) {
      case 'BTC':
        return value / currency.BTC; //USD to BTC
      case 'ETH':
        return value / currency.ETH; //USD to ETH
      default:
        return 0;
      }
    default:
      return 0;
    }
  };

  const changedArrows = () => {
    if (twoDisable) {
      return <p>&rarr;</p>;
    } else
    if (oneDisable) {
      return <p>&larr;</p>;
    } else {
      return <p>&harr;</p>;
    }
  };

  return (
    <div className='exchange-inputs'>
      <div>
        <label>{converterCoins.oneCoin}</label>
        <input
          type="text"
          value={oneInput? oneInput : ''}
          onChange={(event) => inputOneChange(event.target.value)}
          placeholder="0"
          disabled={oneDisable}
        />
      </div>
      {changedArrows()}
      <div>
        <label>{converterCoins.twoCoin}</label>
        <input
          type="text"
          value={twoInput? twoInput : ''}
          onChange={(event) => inputTwoChange(event.target.value)}
          placeholder="0"
          disabled={twoDisable}
        />
      </div>
    </div>
  );
};

export default ExchangeInputs;