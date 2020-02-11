import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import ListGenres from '../../components/ListGenres';
import ListMovies from '../../components/ListMovies';

import {Container} from './styles';

import {Genre} from 'src/types/Genre';

const Home: React.FC = () => {
  const [selected = {id: 28}, setSelected] = useState<Genre>();

  const handleGenreSelected = (item: Genre) => {
    setSelected(item);
  };

  return (
    <Container>
      <ListGenres setGenre={handleGenreSelected} />
      <ScrollView>
        <ListMovies genre={selected.id} />
      </ScrollView>
    </Container>
  );
};

export default Home;
