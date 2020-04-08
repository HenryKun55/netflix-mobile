import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {images} from '../../../assets';
import {Container, ContainerTouchable, Comment, LikeText} from './styles';
import FastImage from 'react-native-fast-image';
import LottieView from 'lottie-react-native';

import * as CastActions from '../../../store/ducks/cast/actions';
import * as MovieActions from '../../../store/ducks/movie/actions';
import { ApplicationState } from '../../../store';

import { RFPercentage } from 'react-native-responsive-fontsize';
import { Rating } from '../../../types/Rating';
import { AirbnbRating } from 'react-native-ratings';
import { TouchableOpacity, Animated } from 'react-native';

interface ItemCastProps {
  rating: Rating;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  idUser: string;
}

interface DispatchProps {
  setPersonRequest(personId: number): void;
  setLikeRatingRequest(idRating: string): void;
}

type Props = ItemCastProps & DispatchProps;

const Item: React.FC<Props> = ({ 
  rating,
  width = RFPercentage(5),
  height = RFPercentage(5),
  borderRadius = RFPercentage(2.5),
  idUser,
  setLikeRatingRequest
})  => {

  const [heart] = useState(new Animated.Value(0));

  useEffect(() => {
    animateHeart();
  }, [rating.users])

  const animateHeart = async () => {
    const like = rating.users?.includes(idUser)
    heart.setValue(like ? 15 : 0);
  };

  const handleLike = () => {
    setLikeRatingRequest(rating._id);
  }

  return (
    <ContainerTouchable>
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
        <TouchableOpacity onPress={handleLike}>
          <LikeText>{rating.users.length}</LikeText>
          <LottieView
            style={{height: 20}}
            source={images.animation.heart}
            progress={heart}
          />
        </TouchableOpacity>
      </Container>
    </ContainerTouchable>
  );
};

const mapStateToProps = ({auth}: ApplicationState) => ({
  idUser: auth.data._id,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({...CastActions, ...MovieActions}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
