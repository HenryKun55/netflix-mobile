/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {IMovie} from '../../../types/IMovie';
import {images} from '../../../assets';
import {Container} from './styles';
import * as MovieActions from '../../../store/ducks/movie/actions';

interface ItemProps {
  item: IMovie;
  uriImage: string;
  width?: number | string;
  height?: number | string;
  backdrop?: boolean;
  borderRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
}

interface DispatchProps {
  setMovieRequest(movie: IMovie): void;
}

type Props = ItemProps & DispatchProps;

const Item: React.FC<Props> = ({
  item,
  uriImage,
  width = 120,
  height = 200,
  backdrop = false,
  borderRadius = 0,
  borderBottomLeftRadius = 0,
  borderBottomRightRadius = 0,
  setMovieRequest,
}) => {
  const navigate = useNavigation();
  const image = !backdrop ? item.poster_path : item.backdrop_path;

  const handleItem = () => {
    setMovieRequest(item);
    navigate.push('Movie');
  }

  return (
    <Container
      onPress={handleItem}>
        <FastImage
          key={item.id}
          style={{
            width,
            height,
            borderRadius,
            borderBottomLeftRadius, 
            borderBottomRightRadius,
            margin: !backdrop ? 4 : 0,
          }}
          source={{
            uri: image ? uriImage.concat(image) : images.noPhoto,
            priority: FastImage.priority.low,
          }}
          resizeMode={FastImage.resizeMode.contain}
          
        />
    </Container>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(MovieActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Item);

