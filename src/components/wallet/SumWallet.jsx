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

  const valuableBTC = wallet.BTC * currency.BTC;
  const valuableETH = wallet.ETH * currency.ETH;
  const valuableAll = valuableBTC + valuableETH + wallet.USD;
  const valuable = parseFloat(valuableAll.toFixed(2));

  const options = {
    responsive: true,
  };

  const data = {
    datasets: [{
      data: [valuableBTC, valuableETH, wallet.USD],
      backgroundColor: ['#B09F00', '#3BBB38', '#4B55AC'],
    }],
    labels: [
      'BTC',
      'ETH',
      'USD',
    ],
  };

  return (
    <div className="summary">
      <div className='summary__diagram'>
        <Doughnut options={options} data={data}/>
      </div>
      <span className='summary__total'>{valuable.toLocaleString()} <span className='usd-symbol'>$</span></span>
    </div>
  );
};

export default WalletChart;