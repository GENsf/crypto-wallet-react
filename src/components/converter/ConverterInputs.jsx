import React, { useState } from 'react';

const ExchangeInputs = ({converterCoins, currency}) => {
  const [oneInput, setOneInput] = useState();
  const [twoInput, setTwoInput] = useState();
  const [oneDisable, setOneDisable] = useState(false);
  const [twoDisable, setTwoDisable] = useState(false);

  const inputOneChange = (valueOne) => {
    var valueTwo = '';
    valueOne = valueOne.trim().replace(/[^.\d]/g, '');
    valueOne ? setTwoDisable(true) : setTwoDisable(false);

    if (valueOne) {
      valueTwo = parseFloat(Number(exchangeOne(valueOne)).toFixed(2));
    }

    setOneInput(valueOne.toLocaleString());
    setTwoInput(valueTwo.toLocaleString());
  };

  const inputTwoChange = (valueTwo) => {
    var valueOne = '';
    valueTwo = valueTwo.trim().replace(/[^.\d]/g, '');
    valueTwo ? setOneDisable(true) : setOneDisable(false);

    if (valueTwo) {
      valueOne = parseFloat(Number(exchangeTwo(valueTwo)).toFixed(2));
    }

    setOneInput(valueOne.toLocaleString());
    setTwoInput(valueTwo.toLocaleString());
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
        return;
      }
    case 'ETH':
      switch (converterCoins.twoCoin) {
      case 'BTC':
        return value * currency.ETH / currency.BTC; //ETH to BTC
      case 'USD':
        return value * currency.ETH; //ETH to USD
      default:
        return;
      }
    case 'USD':
      switch (converterCoins.twoCoin) {
      case 'BTC':
        return value / currency.BTC; //USD to BTC
      case 'ETH':
        return value / currency.ETH; //USD to ETH
      default:
        return;
      }
    default:
      return;
    }
  };

  const exchangeTwo = (value) => {
    if (!value) {
      return;
    }
    switch (converterCoins.twoCoin) {
    case 'BTC':
      switch (converterCoins.oneCoin) {
      case 'ETH':
        return value * currency.BTC / currency.ETH; //BTC to ETH
      case 'USD':
        return value * currency.BTC; //BTC to USD
      default:
        return;
      }
    case 'ETH':
      switch (converterCoins.oneCoin) {
      case 'BTC':
        return value * currency.ETH / currency.BTC; //ETH to BTC
      case 'USD':
        return value * currency.ETH; //ETH to USD
      default:
        return;
      }
    case 'USD':
      switch (converterCoins.oneCoin) {
      case 'BTC':
        return value / currency.BTC; //USD to BTC
      case 'ETH':
        return value / currency.ETH; //USD to ETH
      default:
        return;
      }
    default:
      return;
    }
  };

  const changedArrows = () => {
    if (twoDisable) {
      return <p className='arrow right'>&rarr;</p>;
    } else
    if (oneDisable) {
      return <p className='arrow left'>&larr;</p>;
    } else {
      return <p className='arrow'>&harr;</p>;
    }
  };

  return (
    <>
      <div className='converter-inputs'>
        <div>
          <label style={twoDisable ? {color: '#000000'} : {color: '#555555'}}>{converterCoins.oneCoin}</label>
          <input
            type="text"
            value={oneInput ? oneInput : ''}
            onChange={(event) => inputOneChange(event.target.value)}
            placeholder=""
            disabled={oneDisable}
          />
        </div>
        {changedArrows()}
        <div>
          <label style={oneDisable ? {color: '#000000'} : {color: '#555555'}}>{converterCoins.twoCoin}</label>
          <input
            type="text"
            value={twoInput ? twoInput : ''}
            onChange={(event) => inputTwoChange(event.target.value)}
            placeholder=""
            disabled={twoDisable}
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default ExchangeInputs;