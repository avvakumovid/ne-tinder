import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 'people',
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { setPage } = mainSlice.actions;
export default mainSlice.reducer;
