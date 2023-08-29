import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosInstance} from '../axiosconfig';

export const login = async data => {
  try {
    const result = await axiosInstance('/auth/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    console.log(result);
    return result;
  } catch (error) {
    return error.response.data;
  }
};
