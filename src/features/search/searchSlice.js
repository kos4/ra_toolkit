import {
  buildCreateSlice,
  asyncThunkCreator,
} from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  loading: false,
  error: '',
};

const createSliceWithThunk = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const searchSlice = createSliceWithThunk({
  name: 'search',
  initialState,
  selectors: {
    searchState: (state) => state,
    searchMovies: (state) => state.movies,
  },
  reducers: create => ({
    fetchMovies: create.asyncThunk(
      async (search, { rejectWithValue }) => {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}`);

          if (!response.ok) {
            return rejectWithValue("Loading error!");
          }

          return await response.json();
        } catch (e) {
          return rejectWithValue(e);
        }
      },
      {
        pending: (state) => {
          state.loading = true;
          state.error = "";
        },
        fulfilled: (state, action) => {
          const data = action.payload;

          if (data.Response === 'True') {
            state.movies = data.Search;
            state.error = "";
          } else {
            state.movies = [];
            state.error = data.Error;
          }


        },
        rejected: (state, action) => {
          state.error = action.payload;
        },
        settled: (state) => {
          state.loading = false;
        },
      }
    ),
  }),
});

export const { fetchMovies } = searchSlice.actions;
export default searchSlice.reducer;
