import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    toggleMobileMenu(state) {
      state.open = !state.open;
    },
  },
});

export const { toggleMobileMenu } = headerSlice.actions;
export default headerSlice.reducer;
