import {createSlice} from '@reduxjs/toolkit';
import {getStores} from '../actions/stores';
const initialState = {
  stores: [],
};

export const storesSlice = createSlice({
  name: 'stores',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getStores.fulfilled.type]: (state, {payload}) => {
      return {
        ...state,
        stores: payload,
      };
    },
  },
});

export const {} = storesSlice.actions;
export default storesSlice.reducer;
