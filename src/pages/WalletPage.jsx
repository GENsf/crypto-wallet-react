import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const WalletPage = () => {
  return (
    <>
      <Header title='wallet'/>
      <main className="container">
        <Link to='/converter'>Converter</Link>
      </main>
    </>
  );
};

export default WalletPage;