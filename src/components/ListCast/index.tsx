/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {API_KEY_TMDB, LANG, URI_IMAGE} from 'react-native-dotenv';

import api from '../../services/api';
import {Cast} from 'src/types/Cast';
import {sizes} from '../../config/sizes';
import Item from './Item';
import Separator from './Separator';
import {append} from '../../config/append';

const ListCast: React.FC<{id: number}> = ({id}) => {
  const [casts, setCasts] = useState<Cast[]>([]);

  async function getCasts(): Promise<boolean> {
    const response = await api.get(`movie/${id}`, {
      params: {
        api_key: API_KEY_TMDB,
        language: LANG,
        append_to_response: append.credits,
      },
    });
    setCasts(response.data.credits.cast);

    return true;
  }

  useEffect(() => {
    getCasts();
  }, []);

  return (
    <FlatList
      windowSize={5}
      horizontal={true}
      data={casts}
      keyExtractor={cast => String(cast.cast_id)}
      onEndReached={() => getCasts()}
      onEndReachedThreshold={0.1}
      ItemSeparatorComponent={() => <Separator />}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <Item
          item={item}
          uriImage={URI_IMAGE + sizes.poster_sizes.w185}
          borderRadius={100}
        />
      )}
    />
  );
};

export default ListCast;
