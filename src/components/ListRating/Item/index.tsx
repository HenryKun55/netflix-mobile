import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {images} from '../../../assets';
import {Container, ContainerTouchable, Comment} from './styles';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';

import * as CastActions from '../../../store/ducks/cast/actions';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Rating } from '../../../types/Rating';
import { AirbnbRating } from 'react-native-ratings';
import { View } from 'react-native';

interface ItemCastProps {
  rating: Rating;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
}

interface DispatchProps {
  setPersonRequest(personId: number): void;
}

type Props = ItemCastProps & DispatchProps;

const Item: React.FC<Props> = ({ 
  rating,
  width = RFPercentage(5),
  height = RFPercentage(5),
  borderRadius = RFPercentage(2.5),
})  => {

  return (
    <ContainerTouchable onPress={() => console.log('opa')}>
      <Container>
        <FastImage
          key={rating._id}
          style={{
            width,
            height,
            borderRadius,
            marginRight: 10
          }}
          source={{
            uri: rating.user?.urlImage || images.user,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <AirbnbRating
          count={5}
          selectedColor="#D95E5F"
          showRating={false}
          defaultRating={rating.rating}
          size={10}
          isDisabled={true}
        />
        <Comment>{rating.message}</Comment>
      </Container>
    </ContainerTouchable>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(CastActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Item);
