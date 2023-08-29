import {createAsyncThunk} from '@reduxjs/toolkit';

import {axiosInstance} from '../axiosconfig';

export const getProducts = createAsyncThunk('products', async props => {
  const result = await axiosInstance.get('/product/' + props);

  return result.data;
});
