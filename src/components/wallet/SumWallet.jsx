import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const WalletChart = () => {

  const wallet = useSelector((state) => state.wallet);
  const currency = useSelector((state) => state.currency.value);

  const valuableAll = parseFloat(((wallet.BTC * currency.BTC) + (wallet.ETH * currency.ETH) + wallet.USD).toFixed(2));

  const percentBTC = Math.round(100 / (valuableAll / (wallet.BTC * currency.BTC)));
  const percentETH = Math.round(100 / (valuableAll / (wallet.ETH * currency.ETH)));
  const percentUSD = Math.round(100 / (valuableAll / wallet.USD));

  const percentValue = [percentBTC, percentETH, percentUSD];

  if (percentValue.reduce((prev, curr) => prev + curr, 0) !== 100) {
    const indexMin = percentValue.indexOf(Math.min.apply(null, percentValue));
    percentValue[indexMin] += 1;
  }

  const options = {
    responsive: true,
  };

  const data = {
    datasets: [{
      data: percentValue,
      backgroundColor: ['#B09F00', '#3BBB38', '#4B55AC'],
    }],
    labels: [
      'BTC %',
      'ETH %',
      'USD %',
    ],
  };

  return (
    <div className="summary">
      <div className='summary__diagram'>
        <Doughnut options={options} data={data}/>
      </div>
      <span className='summary__total'>{valuableAll.toLocaleString()} <span className='usd-symbol'>$</span></span>
    </div>
  );
};

export default WalletChart;