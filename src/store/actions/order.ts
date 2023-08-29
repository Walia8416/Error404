import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosInstance} from '../axiosconfig';

export const order = async data => {
  try {
    const result = await axiosInstance('/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
