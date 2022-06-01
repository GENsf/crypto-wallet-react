import React from 'react';
import { useSelector } from 'react-redux';

import BalanceItem from './BalanceItem';
const BalanceList = () => {

  const coinList = useSelector((state) => state.wallet);

  return (
    <>
      <section className="balance">
        {
          Object.entries(coinList).map((cur, i) => {
            return <BalanceItem key={i} coin={cur} />;
          })
        }
      </section>
    </>
  );
};

export default BalanceList;