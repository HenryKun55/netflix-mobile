import React, {useState, useEffect} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {Container, ContainerTitle, Title} from './styles';

import api from '../../services/api';

import {API_KEY_TMDB, LANG} from 'react-native-dotenv';
import {Genre} from '../../types/Genre';

interface GenreProps {
  setGenre(genre: Genre): void;
}

const ListGenres: React.FC<GenreProps> = ({setGenre}) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selected, setSelected] = useState(28);

  async function getLists(): Promise<boolean> {
    const response = await api.get('genre/movie/list', {
      params: {
        api_key: API_KEY_TMDB,
        language: LANG,
      },
    });
    setGenres(response.data.genres);

    return true;
  }

  useEffect(() => {
    getLists();
  }, []);

  const handleSelected = (item: Genre) => {
    setSelected(item.id);
    setGenre(item);
  };

  const renderTitle = ({item}: {item: Genre}) => (
    <TouchableOpacity onPress={() => handleSelected(item)}>
      <ContainerTitle>
        <Title selected={selected === item.id}>
          {item.name
            .slice(0, 1)
            .toUpperCase()
            .concat(item.name.slice(1, item.name.length))}
        </Title>
      </ContainerTitle>
    </TouchableOpacity>
  );

  return (
    <Container>
      <FlatList
        horizontal={true}
        data={genres}
        keyExtractor={movie => String(movie.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={renderTitle}
      />
    </Container>
  );
};

export default ListGenres;
