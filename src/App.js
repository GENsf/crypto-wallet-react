import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import WalletPage from './pages/WalletPage';
import ConverterPage from './pages/ConverterPage';
import NotFoundPage from './pages/NotFoundPage';

import { setCurrency, setHistory } from './store/slices/cryptoCurrencySlice';
import useGetCurr from './hooks/useGetCurr';
import useGetHistory from './hooks/useGetHistory';

function App() {
  const dispatch = useDispatch();

  const currency = useGetCurr();
  const history = useGetHistory();

  useEffect(() => {
    dispatch(setCurrency({currency}));
    dispatch(setHistory({history}));
  }, [currency, history, dispatch]);

  return (
    <>
      <Routes>
        <Route path='/' element={<WalletPage />} />
        <Route path='/converter' element={<ConverterPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
