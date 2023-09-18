import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  elements: [
    { id: 1, type: 'div', attr: { className: 'main' }, parentId: 0 },
    { id: 2, type: 'div', attr: { className: 'inner' }, parentId: 1 },
    { id: 3, type: 'div', attr: { className: 'inner' }, parentId: 1 },
    { id: 4, type: 'div', attr: { className: 'inner' }, parentId: 1 },
  ],
  selected: null,
};

export const element = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    getElements(state) {
      return state;
    },
    insertElement(state, action) {
      return state;
    },
    deleteElement(state, action) {
      return state;
    },
    setSelected(state, action) {
      return state;
    },
    getSelected(state) {
      return state;
    },
  },
});

export const { insertElement, deleteElement, setSelected } = element.actions;
export default element.reducer;
