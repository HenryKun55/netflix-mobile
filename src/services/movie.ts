import api from './api';
import {API_KEY_TMDB, LANG} from 'react-native-dotenv';

export const discoverMovies = async (payload: any) => {
  // console.log(payload);
  const {genre, pageNumber} = payload;
  try {
    const {data} = await api.get('discover/movie', {
      params: {
        api_key: API_KEY_TMDB,
        language: LANG,
        with_genres: genre,
        page: pageNumber,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const discoverGenres = async () => {
  try {
    const {data} = await api.get('genre/movie/list', {
      params: {
        api_key: API_KEY_TMDB,
        language: LANG,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
