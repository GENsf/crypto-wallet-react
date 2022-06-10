import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import CoinBar from '../components/wallet/CoinBar';
import BalanceList from '../components/wallet/BalanceList';
import SumWallet from '../components/wallet/SumWallet';
import SendModal from '../components/wallet/SendModal';

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
              <Link to='/converter' className='btn btn-main converter' data-testid="converter-link">Converter</Link>
            </section>
            <BalanceList />
            <SumWallet />
            <SendModal />
          </section>
        </section>
      </main>
    </>
  );
};

export default WalletPage;