/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Cast} from 'src/types/Cast';
import {Container, Name} from './styles';
import {images} from '../../../assets';

const Item = ({
  item,
  uriImage,
  width = 100,
  height = 100,
  borderRadius = 0,
}: {
  item: Cast;
  uriImage: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
}) => {
  return (
    <Container>
      <FastImage
        key={item.id}
        style={{
          width,
          height,
          borderRadius,
        }}
        source={{
          uri: item.profile_path
            ? uriImage.concat(item.profile_path)
            : images.noPhoto,
          priority: FastImage.priority.low,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Name>{item.name}</Name>
    </Container>
  );
};

export default Item;
