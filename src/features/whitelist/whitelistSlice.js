import { createSlice } from "@reduxjs/toolkit";

const whitelist = localStorage.getItem('whitelist');
const initialState = {
  list: whitelist ? JSON.parse(whitelist) : [],
};

export const whitelistSlice = createSlice({
  name: "whitelist",
  initialState,
  reducers: {
    addWhitelist: (state, action) => {
      if (state.list.find(item => item.id === action.payload.id) === undefined) {
        state.list.push(action.payload);
        localStorage.setItem('whitelist', JSON.stringify(state.list));
      }
    },
    removeWhitelist: (state, action) => {
      state.list = state.list.filter(item => item.id !== action.payload);
    },
  },
});

export const { addWhitelist, removeWhitelist } = whitelistSlice.actions;
export default whitelistSlice.reducer;
