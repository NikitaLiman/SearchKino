import { configureStore } from '@reduxjs/toolkit';
import Slice from './slices/slice';
import Filter from './slices/filter';
import TrailerSlice from './slices/TrailerSlice';
import React from 'react';
import FavouriteSlice from './slices/FavouriteSlice';

export const Store = configureStore({
  reducer: {
    Slice,
    Filter,
    TrailerSlice,
    FavouriteSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
