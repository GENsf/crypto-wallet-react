import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HistoryCharts = () => {
  const history = useSelector((state) => state.currency.history);

  const HumanReadbleDays = history.days.map((value) => {
    return new Date(value * 1000 - 24 * 3600000).getDate();
  });

  const options = {
    responsive: true,
  };

  const labels = HumanReadbleDays;

  const data = {
    labels,
    datasets: [
      {
        label: 'Ethereum',
        data: history.ETHHistory,
        borderColor: '#54b84b',
        backgroundColor: '#54b84b',
      },
    ],
  };

  return (
    <div className='chart'>
      <Line options={options} data={data}/>
    </div>
  );
};

export default HistoryCharts;