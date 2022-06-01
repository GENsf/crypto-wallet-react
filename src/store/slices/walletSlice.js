import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  BTC: 34.23,
  ETH: 214.34,
  USD: 64235.2,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    increment: (state, action) => {
      state = action.payload;
    },
    decrement: (state, action) => {

    },
  },
});

export const { increment, decrement } = walletSlice.actions;
export default walletSlice.reducer;