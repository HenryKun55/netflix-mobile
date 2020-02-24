import React, {useState, useEffect} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {Container, ContainerTitle, Title} from './styles';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {Genre} from '../../types/Genre';
import {ApplicationState} from '../../store';
import * as GenreActions from '../../store/ducks/genre/actions';

interface GenreProps {
  setGenre(genre: Genre): void;
}

interface StateProps {
  genres: Genre[];
}

interface DispatchProps {
  genreRequest(): void;
}

type Props = StateProps & DispatchProps & GenreProps;

const ListGenres: React.FC<Props> = ({setGenre, genreRequest, genres}) => {
  const [selected, setSelected] = useState(28);

  useEffect(() => {
    if (genres.length === 0) {
      genreRequest();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

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

const mapStateToProps = ({genre}: ApplicationState) => ({
  genres: genre.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(GenreActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListGenres);
