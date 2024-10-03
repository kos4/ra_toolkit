import { configureStore } from '@reduxjs/toolkit'
import searchReducer from "../features/search/searchSlice";
import movieReducer from "../features/movie/movieSlice";
import whitelistReducer from "../features/whitelist/whitelistSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    movie: movieReducer,
    whitelist: whitelistReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})
