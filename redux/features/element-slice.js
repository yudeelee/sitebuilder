import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  elements: [
    {
      id: 1,
      type: 'div',
      attr: { className: 'main' },
      parentId: 0,
      selectedClass: 'main',
    },
    {
      id: 2,
      type: 'div',
      attr: { className: 'inner outer line' },
      parentId: 1,
      selectedClass: null,
    },
    {
      id: 3,
      type: 'div',
      attr: { className: 'inner outer' },
      parentId: 1,
      selectedClass: 'outer',
    },
    {
      id: 4,
      type: 'div',
      attr: { className: 'fours' },
      parentId: 1,
      selectedClass: 'fours',
    },
  ],
  selected: null,
  latestId: 5,
};

export const element = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    insertElement(state, action) {
      state.elements.push({ ...action.payload, id: state.latestId + 1 });
      state.latestId += 1;
    },
    deleteElement(state, action) {
      return state;
    },
    setSelected(state, action) {
      state.selected = action.payload;
    },
    setSelectedCl(state, action) {
      state.elements.find((el) => el.id == action.payload.id).selectedClass =
        action.payload.cl;
    },
  },
});

export const { insertElement, deleteElement, setSelected, setSelectedCl } =
  element.actions;
export default element.reducer;
