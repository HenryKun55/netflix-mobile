import api, {apiLocal} from './api';
import Config from 'react-native-config';

export const getMoviesFromActor = async (payload: any) => {
  const {personId} = payload;
  try {
    const {data} = await api.get(`person/${personId}/movie_credits`, {
      params: {
        api_key: Config.API_KEY_TMDB,
        language: Config.LANG,
      },
    });
    return data.cast;
  } catch (error) {
    throw error;
  }
};

export const getActor = async (payload: any) => {
  const {personId} = payload;
  try {
    const {data} = await api.get(`person/${personId}`, {
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
