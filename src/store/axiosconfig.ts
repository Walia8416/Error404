import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const axiosInstance = axios.create({
  baseURL: 'http://api.weatherapi.com/v1/',
});

axiosInstance.interceptors.response.use(
  res => {
    return res;
  },
  async err => {
    if (err.response.status === 401) {
      await AsyncStorage.removeItem('@accounts');
    }
    return Promise.reject(err);
  },
);
