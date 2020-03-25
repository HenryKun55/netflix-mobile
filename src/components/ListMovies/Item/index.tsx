/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {IMovie} from '../../../types/IMovie';
import {images} from '../../../assets';
import {Container} from './styles';

const Item = ({
  item,
  uriImage,
  width = 120,
  height = 200,
  backdrop = false,
  borderRadius = 0,
  widthContainer,
  borderRadiusContainer,
}: {
  item: IMovie;
  uriImage: string;
  width?: number | string;
  height?: number | string;
  backdrop?: boolean;
  borderRadius?: number;
  widthContainer?: number;
  borderRadiusContainer?: number;
}) => {
  const navigate = useNavigation();
  const image = !backdrop ? item.poster_path : item.backdrop_path;

  return (
    <Container
      widthContainer={widthContainer}
      borderRadiusContainer={borderRadiusContainer}
      onPress={() => navigate.navigate('Movie', {item})}>
      <FastImage
        key={item.id}
        style={{
          width,
          height,
          borderRadius,
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

export default Item;
