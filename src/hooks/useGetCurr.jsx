import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetCurr = () => {
  const [getCurrency, setGetCurrency] = useState({
    BTC: 0,
    ETH: 0,
    USD: 1,
  });

  useEffect(() => {
    const URL = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD';
    try {
      axios.get(URL).then((response) => {
        response.data.Response === 'Error' ? setGetCurrency({}) :
          setGetCurrency({
            BTC: response.data.BTC.USD,
            ETH: response.data.ETH.USD,
            USD: 1,
          });
      });
    } catch (error) {
      setGetCurrency({});
    }
  }, []);

  return getCurrency;
};

export default useGetCurr;