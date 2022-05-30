import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  BTCValue: 0,
  ETHValue: 0,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    increment: (state, action) => {

    },
    decrement: (state, action) => {

    },
  },
});

export const { increment, decrement } = walletSlice.actions;
export default walletSlice.reducer;