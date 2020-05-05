import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import ImagePicker, {
  ImagePickerResponse,
  ImagePickerOptions,
} from 'react-native-image-picker';
import {ApplicationState} from '../../store';
import * as AuthActions from '../../store/ducks/auth/actions';
import {IUser} from '../../types/IUser';

import {Container, Header, TouchableImage, Title, Content, CustomTitle} from './styles';
import FastImage from 'react-native-fast-image';
import {RFPercentage} from 'react-native-responsive-fontsize';

import ListFavorites from '../../components/ListFavorites';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import { images } from '../../assets';

interface StateProps {
  user: IUser;
  loading: boolean;
}

interface DispatchProps {
  removeAuth(): void;
  imageRequest(file: ImagePickerResponse): void;
}

type Props = StateProps & DispatchProps;

const User: React.FC<Props> = ({user, loading, imageRequest, removeAuth}) => {
  const options: ImagePickerOptions = {
    title: 'Escolha uma imagem',
    quality: 1,
    allowsEditing: true,
    mediaType: 'photo',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const handleImage = () => {
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else {
        imageRequest(response);
      }
    });
  };

  const handleExit = () => {
    removeAuth();
  };

  return (
    <Container>
      <Header>
        <TouchableImage borderRadius={RFPercentage(10)} onPress={handleImage}>
          {loading ? (
            <Loading />
          ) : (
            <FastImage
              style={{
                width: RFPercentage(20),
                height: RFPercentage(20),
                borderRadius: RFPercentage(10),
              }}
              source={{
                uri: user.url || images.user,
                priority: FastImage.priority.low,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          )}
        </TouchableImage>
        <Title>{user.name}</Title>
      </Header>
      <Content>
        <CustomTitle>Favoritos</CustomTitle>
        <ListFavorites />
      </Content>
      <Button name="Sair" disabled={loading} onPress={handleExit} />
    </Container>
  );
};

const mapStateToProps = ({movie, auth}: ApplicationState) => ({
  loading: auth.loading,
  user: auth.data,
  movies: movie.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
