import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetHistory = () => {
  const [BTCHistory, setBTCHistory] = useState([]);
  const [ETHHistory, setETHHistory] = useState([]);
  const [days, setDays] = useState([]);

  const history = {
    BTCHistory: BTCHistory,
    ETHHistory: ETHHistory,
    days: days,
  };

  useEffect(() => {
    const BTCUrl = 'https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=13';
    const ETHUrl = 'https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=13';
    setDays([]);
    try {
      axios.get(BTCUrl).then((response) => {
        if (response.data.Response !== 'Error') {
          const array = response.data.Data.Data;
          array.forEach((element) => {
            setBTCHistory((prev) => [...prev, element.close]);
            setDays((prev) => [...prev, element.time]);
          });
        } else setBTCHistory([]);
      });
      axios.get(ETHUrl).then((response) => {
        if (response.data.Response !== 'Error') {
          const array = response.data.Data.Data;
          array.forEach((element) => {
            setETHHistory((prev) => [...prev, element.close]);
          });
        } else setETHHistory([]);
      });
    } catch (error) {
      setBTCHistory([]);
      setETHHistory([]);
    }
  }, []);

  return history;
};

export default useGetHistory;