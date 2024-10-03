import {
  buildCreateSlice,
  asyncThunkCreator,
} from "@reduxjs/toolkit";

const initialState = {
  movie: null,
  loading: false,
  error: '',
};

const createSliceWithThunk = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const movieSlice = createSliceWithThunk({
  name: 'movie',
  initialState,
  selectors: {
    movieState: (state) => state,
    movieData: (state) => state.movie,
  },
  reducers: create => ({
    fetchMovie: create.asyncThunk(
      async (id, { rejectWithValue }) => {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`);

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
            state.movie = data;
            state.error = "";
          } else {
            state.movie = null;
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

export const { fetchMovie } = movieSlice.actions;
export default movieSlice.reducer;
