import { configureStore } from '@reduxjs/toolkit';
import firstReducer from './features/first-slice';

export const store = configureStore({
  reducer: {
    first: firstReducer,
  },
});
