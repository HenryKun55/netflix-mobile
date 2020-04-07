import axios from 'axios';
import Config from 'react-native-config';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  paramsSerializer: (params) => {
    // Sample implementation of query string building
    let result = '';
    Object.keys(params).forEach(key => {
        result += `${key}=${encodeURIComponent(params[key])}&`;
    });
    return result.substr(0, result.length - 1);
  }
});

export const apiLocal = axios.create({
  baseURL: Config.API_LOCAL,
});

export default api;
