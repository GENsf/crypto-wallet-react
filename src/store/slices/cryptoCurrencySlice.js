import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: {
    BTC: 0,
    ETH: 0,
    USD: 1,
  },
  history: {
    BTCHistory: [],
    ETHHistory: [],
    days: [],
  },
};

const cryptoCurrencySlice = createSlice({
  name: 'cryptoCurrency',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.value = action.payload.currency;
    },
    setHistory: (state, action) => {
      state.history = action.payload.history;
    },
  },
});

export const { setCurrency, setHistory } = cryptoCurrencySlice.actions;
export default cryptoCurrencySlice.reducer;