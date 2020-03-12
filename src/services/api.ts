import axios from 'axios';
import {API_LOCAL} from 'react-native-dotenv';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const apiLocal = axios.create({
  baseURL: API_LOCAL,
});

export default api;
