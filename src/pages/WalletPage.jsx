import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import CoinBar from '../components/wallet/CoinBar';
import BalanceList from '../components/wallet/BalanceList';
import SumWallet from '../components/wallet/SumWallet';

const WalletPage = () => {
  return (
    <>
      <Header title='wallet'/>
      <main className="wallet">
        <section className='container'>
          <section className='wallet-content'>
            <section className="bar">
              <CoinBar coinName={'BTC'}/>
              <CoinBar coinName={'ETH'}/>
            </section>
            <Link to='/converter' className='btn btn-main converter'>Converter</Link>
            <BalanceList />
            <SumWallet />
          </section>
        </section>
      </main>
    </>
  );
};

export default WalletPage;