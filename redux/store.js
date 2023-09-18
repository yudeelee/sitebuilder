import { configureStore } from '@reduxjs/toolkit';
import firstReducer from './features/first-slice';
import elementReducer from './features/element-slice';

export const store = configureStore({
  reducer: {
    first: firstReducer,
    element: elementReducer,
  },
});
