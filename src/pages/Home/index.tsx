import React from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import ListGenres from '../../components/ListGenres';
import ListMovies from '../../components/ListMovies';
import {ApplicationState} from '../../store';
import * as GenreActions from '../../store/ducks/genre/actions';

import {Container} from './styles';

import {Genre} from 'src/types/Genre';

interface StateProps {
  selected: number;
}

interface DispatchProps {
  setGenreRequest(selected: number): void;
}

type Props = StateProps & DispatchProps;

const Home: React.FC<Props> = ({setGenreRequest}) => {
  const handleGenreSelected = (item: Genre) => {
    setGenreRequest(item.id);
  };

  return (
    <Container>
      <ListGenres setGenre={handleGenreSelected} />
      <ScrollView>
        <ListMovies />
      </ScrollView>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(GenreActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Home);
