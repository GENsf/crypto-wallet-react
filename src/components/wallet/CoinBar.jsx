import React from 'react';
import { useSelector } from 'react-redux';

const CoinBar = ({coinName}) => {
  const coinSum = {
    coinVal: useSelector((state) => state.currency.value[coinName]),
    coinHistory: useSelector((state) => state.currency.history[coinName + 'History']),
  };

  const HistoryLastIndex = coinSum.coinHistory.length - 1;
  const coinChange = coinSum.coinVal - coinSum.coinHistory[HistoryLastIndex];

  const setArrow = () => {
    if (coinChange > 0) {
      return <span className='bar__arrow-up'>&#9650;</span>;
    } else if (coinChange < 0) {
      return <span className='bar__arrow-down'>&#9660;</span>;
    } else
      return;
  };

  return (
    <div className={'bar__card ' + coinName.toLowerCase()}>
      <span className='bar__row'>
        {setArrow()}
        <span className='bar__coin-name'> {coinName}: </span>
        <span className='bar__coin-val'>{coinSum.coinVal} </span>
        <span className='bar__coin-usd usd-symbol'>$</span>
      </span>
    </div>
  );
};

export default CoinBar;