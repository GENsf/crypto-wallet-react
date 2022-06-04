import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  show: false,
  coin: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.show = action.payload.show;
      state.coin = action.payload.coin;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;