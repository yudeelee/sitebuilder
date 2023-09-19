import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  classes: [],
  selected: null,
  latestId: 1,
};

export const cl = createSlice({
  name: 'classes',
  initialState,
  reducers: {
    addClass(state, action) {
      const cl = state.classes.find((cl) => cl.name === action.payload);
      if (!cl) {
        state.classes.push({ ...action.payload, id: state.latestId + 1 });
        state.latestId += 1;
      }
    },
    deleteClass(state, action) {
      return state;
    },
    setSelectedClass(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { addClass, deleteClass, setSelectedClass } = cl.actions;
export default cl.reducer;
