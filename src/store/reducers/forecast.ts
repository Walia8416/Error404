import {createSlice} from '@reduxjs/toolkit';
import {getForecast} from '../actions/forecast';
const initialState = {
  forecast: [],
};

export const forecastSlice = createSlice({
  name: 'forecast',
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
