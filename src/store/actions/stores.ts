import {createAsyncThunk} from '@reduxjs/toolkit';

import {axiosInstance} from '../axiosconfig';

export const getStores = createAsyncThunk('stores', async props => {
  const result = await axiosInstance.get('/store/' + props);
  try {
  } catch (error) {
    console.log('error saving stores');
  }

  return result.data;
});
