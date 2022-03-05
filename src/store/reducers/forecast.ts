import {createSlice} from '@reduxjs/toolkit';
import {getForecast} from '../actions/forecast';
const initialState = {
  categories: [],
};

export const forecastSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getForecast.fulfilled.type]: (state, {payload}) => {
      return {
        ...state,
        forecast: payload,
      };
    },
  },
});

export const {} = forecastSlice.actions;
export default forecastSlice.reducer;
