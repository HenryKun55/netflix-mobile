import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {useNavigation} from '@react-navigation/native';
import {ApplicationState} from '../../store';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as AuthActions from '../../store/ducks/auth/actions';

import {Container, ContainerImage, ContainerTitle, Title} from './styles';
import {IUser} from '../../types/IUser';
import Loading from '../Loading';
import { images } from '../../assets';

interface StateProps {
  user: IUser;
  loading: boolean;
}

type Props = StateProps;

const Header: React.FC<Props> = ({user, loading}) => {
  const navigate = useNavigation();

  const handleUser = () => {
    navigate.navigate('User');
    return true;
  };

  const handleSearch = () => {
    navigate.navigate('Search');
  };

  return (
    <Container>
      <ContainerImage onPress={handleUser}>
        {loading ? (
          <Loading />
        ) : (
          <FastImage
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
            source={{
              uri: user.url || images.user,
              priority: FastImage.priority.low,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        )}
      </ContainerImage>
      <ContainerTitle onStartShouldSetResponder={handleUser}>
        <Title>Olá</Title>
        <Title title>{user.name}</Title>
      </ContainerTitle>
      <Icon name="search" size={20} color="#FFF" onPress={handleSearch} style={{ flex: 0.4 }} />

    </Container>
  );
};

const mapStateToProps = ({auth}: ApplicationState) => ({
  user: auth.data,
  loading: auth.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
