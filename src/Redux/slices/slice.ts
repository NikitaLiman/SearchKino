import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

interface State {
  value: number;
}

const initialState: State = {
  value: 0,
};

export const SortOnScroll = createSlice({
  name: 'SortOnScroll',
  initialState,
  reducers: {},
});

export const {} = SortOnScroll.actions;
export default SortOnScroll.reducer;
