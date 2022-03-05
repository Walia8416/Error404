import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const axiosInstance = axios.create({
  // baseURL: 'http://10.0.2.2:3000/',
  baseURL: 'https://staging-api.admybrand.com/',
});

axiosInstance.interceptors.response.use(
  res => {
    // Add configurations here
    return res;
  },
  async err => {
    if (err.response.status === 401) {
      await AsyncStorage.removeItem('@accounts');
    }
    return Promise.reject(err);
  },
);
