import {createSlice} from '@reduxjs/toolkit';
import {getCategories} from '../actions/categories';
const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getCategories.fulfilled.type]: (state, {payload}) => {
      return {
        ...state,
        categories: payload,
      };
    },
  },
});

export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;
