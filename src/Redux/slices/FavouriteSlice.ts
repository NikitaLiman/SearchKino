import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';
interface Movie {
  id: number;
  poster_path: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  release_date: number;
  popularity: number;
  original_title: string;
  vote_count: number;
  overview: string;
}
interface State {
  items: Movie[];
}

const initialState: State = {
  items: [],
};

export const FavouriteSlice = createSlice({
  name: 'FavouriteSlice',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Movie>) {
      const ExitMovie = state.items.find((movies) => movies.id === action.payload.id);

      if (!ExitMovie) {
        state.items.push(action.payload);
      }
      console.log(action);
    },
    ClearAll(state) {
      state.items = [];
    },
    RemoveItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { addItem, ClearAll, RemoveItem } = FavouriteSlice.actions;
export default FavouriteSlice.reducer;
