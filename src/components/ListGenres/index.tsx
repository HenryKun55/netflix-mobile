import React, {useState, useEffect} from 'react';
import {FlatList, TouchableOpacity, Text} from 'react-native';
import {Container, ContainerTitle, Title} from './styles';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {Genre} from '../../types/Genre';
import {discoverGenres} from '../../services/movie';
import {ApplicationState} from '../../store';
import * as AuthActions from '../../store/ducks/auth/actions';
import {IUser} from '../../types/IUser';

interface GenreProps {
  setGenre(genre: Genre): void;
}

interface StateProps {
  auth: IUser;
}

interface DispatchProps {
  loginRequest(email: string, password: string): void;
}

type Props = StateProps & DispatchProps & GenreProps;

const ListGenres: React.FC<Props> = ({setGenre, loginRequest}) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selected, setSelected] = useState(28);

  async function getLists(): Promise<boolean> {
    const data = await discoverGenres();
    setGenres(data.genres);

    return true;
  }

  useEffect(() => {
    const email = 'henrique2@email.com';
    const password = 'flavio92416124';
    loginRequest({email, password});
    getLists();
  }, [loginRequest]);

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

const mapStateToProps = ({auth}: ApplicationState) => ({
  auth: auth.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListGenres);
