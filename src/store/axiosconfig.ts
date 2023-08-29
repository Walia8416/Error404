import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const axiosInstance = axios.create({
  baseURL: 'http://3.108.203.2:8000/api',
});
