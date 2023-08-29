import {createSlice} from '@reduxjs/toolkit';
import {getorders} from '../actions/getOrders';
const initialState = {
  orders: [],
};

export const orderSlice = createSlice({
  name: 'orders',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getorders.fulfilled.type]: (state, {payload}) => {
      return {
        ...state,
        orders: payload,
      };
    },
  },
});

export const {} = orderSlice.actions;
export default orderSlice.reducer;
