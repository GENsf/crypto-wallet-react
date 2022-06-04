import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../components/Header';
import ConverterInputs from '../components/converter/ConverterInputs';
import ETHHistoryChart from '../components/converter/ETHHistoryChart';
import BTCHistoryChart from '../components/converter/BTCHistoryChart';

const ConverterPage = () => {

  const currency = useSelector((state) => state.currency.value);

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
          <Link to='/' className='btn btn-border'>&larr; Back</Link>
          <section className='converter-content'>
            <div className='history-charts'>
              <h2>Price Graph (14d)</h2>
              <BTCHistoryChart />
              <ETHHistoryChart />
            </div>
            <div className='converter'>
              <h2>Converter</h2>
              <ConverterInputs converterCoins={BTCtoUSDConvert} currency={currency} />
              <ConverterInputs converterCoins={ETHtoUSDConvert} currency={currency}/>
              <ConverterInputs converterCoins={BTCtoETHConvert} currency={currency}/>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default ConverterPage;