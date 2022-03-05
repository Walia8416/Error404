import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosInstance} from '../axiosconfig';

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const result = await axiosInstance.get('category/get');
    
    return result.data;
  },
);
