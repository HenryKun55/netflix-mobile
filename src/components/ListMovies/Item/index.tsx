/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import {IMovie} from '../../../types/IMovie';
import {images} from '../../../assets';

const Item = ({
  item,
  uriImage,
  width = 150,
  height = 200,
  backdrop = false,
  borderRadius = 0,
}: {
  item: IMovie;
  uriImage: string;
  width?: number | string;
  height?: number | string;
  backdrop?: boolean;
  borderRadius?: number;
}) => {
  const navigate = useNavigation();
  const image = !backdrop ? item.poster_path : item.backdrop_path;

  return (
    <TouchableHighlight onPress={() => navigate.navigate('Movie', {item})}>
      <FastImage
        key={item.id}
        style={{
          width,
          height,
          borderRadius,
        }}
        source={{
          uri: image ? uriImage.concat(image) : images.noPhoto,
          priority: FastImage.priority.low,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </TouchableHighlight>
  );
};

export default Item;
