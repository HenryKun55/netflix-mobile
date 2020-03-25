import api, {apiLocal} from './api';
import Config from 'react-native-config';
import {append} from '../config/append';

export const discoverMovies = async (payload: any) => {
  const {genre, pageNumber} = payload;
  try {
    const {data} = await api.get('discover/movie', {
      params: {
        api_key: Config.API_KEY_TMDB,
        language: Config.LANG,
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
        api_key: Config.API_KEY_TMDB,
        language: Config.LANG,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMovie = async (payload: any) => {
  const {movieId, token} = payload;
  try {
    const {data} = await apiLocal.get(`movie/${movieId}`, {
      headers: {Authorization: `Bearer ${token}`},
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCast = async (payload: any) => {
  const {movieId} = payload;
  try {
    const {data} = await api.get(`movie/${movieId}`, {
      params: {
        api_key: Config.API_KEY_TMDB,
        language: Config.LANG,
        append_to_response: append.credits,
      },
    });
    return data.credits.cast;
  } catch (error) {
    throw error;
  }
};

export const likeMovie = async (payload: any) => {
  const {movieId, token} = payload;
  try {
    const {data} = await apiLocal.post(
      'movie',
      {movieId},
      {
        headers: {Authorization: `Bearer ${token}`},
      },
    );
    return data;
  } catch (error) {
    throw error;
  }
};
