import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../components/Header';
import ConverterInputs from '../components/ConverterInputs';
import ETHHistoryChart from '../components/ETHHistoryChart';
import BTCHistoryChart from '../components/BTCHistoryChart';

const ConverterPage = () => {

  const currency = useSelector((state) => state.currency.value);

  const preloader = () => {
    if (currency.BTC) {
      return false;
    } else {
      return <span className='loader'></span>;
    }
  };

  const BTCtoETHConvert = {
    oneCoin: 'BTC',
    twoCoin: 'ETH',
  };
  const BTCtoUSDConvert = {
    oneCoin: 'BTC',
    twoCoin: 'USD',
  };
  const ETHtoUSDConvert = {
    oneCoin: 'ETH',
    twoCoin: 'USD',
  };

  return (
    <>
      <Header title='converter'/>
      <main className="converter-page">
        <section className='container'>
          <Link to='/'>&larr; Back</Link>
          {preloader() ? preloader() : <section>
            <div className='history-charts'>
              <h2>Two Weeks History</h2>
              <ETHHistoryChart />
              <BTCHistoryChart />
            </div>
            <div className='exchange'>
              <h2>Converter</h2>
              <ConverterInputs converterCoins={BTCtoUSDConvert} currency={currency} />
              <ConverterInputs converterCoins={ETHtoUSDConvert} currency={currency}/>
              <ConverterInputs converterCoins={BTCtoETHConvert} currency={currency}/>
            </div>
          </section>
          }
        </section>
      </main>
    </>
  );
};

export default ConverterPage;