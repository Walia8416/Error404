import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosInstance} from '../axiosconfig';

export const getForecast = createAsyncThunk('forecast', async () => {
  const result = await axiosInstance.get(
    'forecast.json?key=becc4d53c5d443519fd74629220503&q=New Delhi&days=7&aqi=no&alerts=no',
  );

  console.log(result.data);
  return result.data;
});
