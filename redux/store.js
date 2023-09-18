import { configureStore } from '@reduxjs/toolkit';
import firstReducer from './features/first-slice';
import elementReducer from './features/element-slice';
import classReducer from './features/class-slice';

export const store = configureStore({
  reducer: {
    first: firstReducer,
    element: elementReducer,
    class: classReducer,
  },
});
