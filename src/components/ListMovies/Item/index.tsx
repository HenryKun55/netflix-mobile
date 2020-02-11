import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import {Movie} from '../../../types/Movies';
import {images} from '../../../assets';

const Item = ({
  item,
  uriImage,
  width = 150,
  height = 200,
}: {
  item: Movie;
  uriImage: string;
  width?: number;
  height?: number;
}) => {
  const navigate = useNavigation();

  return (
    <TouchableHighlight
      onPress={() => navigate.navigate('Movie', {Movie: item})}>
      <FastImage
        key={item.id}
        style={{width, height}}
        source={{
          uri: item.poster_path
            ? uriImage.concat(item.poster_path)
            : images.noPhoto,
          priority: FastImage.priority.low,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </TouchableHighlight>
  );
};

export default Item;
