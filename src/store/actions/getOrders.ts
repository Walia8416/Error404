import {createAsyncThunk} from '@reduxjs/toolkit';

import {axiosInstance} from '../axiosconfig';

export const getorders = createAsyncThunk('getorders', async props => {
  const result = await axiosInstance.get('/orders/operator/' + props);
  try {
  } catch (error) {
    console.log('error in fetching orders');
  }

  return result.data;
});
