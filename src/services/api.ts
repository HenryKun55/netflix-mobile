import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const apiLocal = axios.create({
  baseURL: 'http://192.168.1.109:3333',
});

export default api;
