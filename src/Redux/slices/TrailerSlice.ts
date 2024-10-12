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
}
interface Genre {
  id: number;
  name: string;
}
interface State {
  selectedMovie: Movie | null;
  trailers: { [key: number]: string };
  MoviesGenres: Genre[] | null;
}
const initialState: State = {
  selectedMovie: null,
  trailers: {},
  MoviesGenres: null,
};

export const TrailerSlice = createSlice({
  name: 'TrailerSlice',
  initialState,
  reducers: {
    GetProps(
      state,
      action: PayloadAction<{
        trailers: { [key: number]: string };
        selectedMovie: Movie | null;
        MoviesGenres: Genre[] | null;
      }>,
    ) {
      console.log(action);
      state.selectedMovie = action.payload.selectedMovie;
      state.trailers = action.payload.trailers;
      state.MoviesGenres = action.payload.MoviesGenres;
    },
  },
});

export const { GetProps } = TrailerSlice.actions;
export default TrailerSlice.reducer;
