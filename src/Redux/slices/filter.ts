import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';
import Category from '../../Components/category';
interface SortType {
  name: string;
  sort: string;
}
interface State {
  value: number;
  sort: SortType;
}

const initialState: State = {
  value: 0,
  sort: {
    name: 'Populary',
    sort: 'popularity',
  },
};

export const Filter = createSlice({
  name: 'Filter',
  initialState,
  reducers: {
    filter(state, action: PayloadAction<number>) {
      console.log(state);
      state.value = action.payload;
    },
    sort(state, action: PayloadAction<any>) {
      state.sort = action.payload;
    },
  },
});

export const { filter, sort } = Filter.actions;
export default Filter.reducer;
