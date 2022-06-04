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
    sendAction: (state, action) => {
      state[action.payload.from] -= action.payload.fromValue;
      if (action.payload.to !== 'other') {
        state[action.payload.to] += action.payload.toValue;
      }
    },
  },
});

export const { sendAction } = walletSlice.actions;
export default walletSlice.reducer;