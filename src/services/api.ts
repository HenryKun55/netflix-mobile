import axios from 'axios';
import Config from 'react-native-config';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const apiLocal = axios.create({
  baseURL: Config.API_LOCAL,
});

export default api;
