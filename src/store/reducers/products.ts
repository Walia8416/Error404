import {createSlice} from '@reduxjs/toolkit';
import {getProducts} from '../actions/products';
const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getProducts.fulfilled.type]: (state, {payload}) => {
      return {
        ...state,
        products: payload,
      };
    },
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
