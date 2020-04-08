import React, {useState, useEffect, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {AirbnbRating} from 'react-native-ratings';
import Config from 'react-native-config';
import {
  Container,
  ContainerMovie,
  ContainerHeader,
  ContainerRating,
  ContainerLoading,
  OverView,
  Title,
  CustomTitle,
  Desctiption,
  Opacity,
} from './styles';
import Item from '../../components/ListMovies/Item';
import UserRating from '../../components/UserRating';
import Loading from '../../components/Loading';
import ListRating from '../../components/ListRating';
import {IMovie} from '../../types/IMovie';
import {sizes} from '../../config/sizes';
import {width} from '../../config';
import ListCast from '../../components/ListCast';
import LottieView from 'lottie-react-native';
import {images} from '../../assets';
import {TouchableOpacity, Animated, Text, TouchableHighlight, BackHandler} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {ApplicationState} from '../../store';
import * as MovieActions from '../../store/ducks/movie/actions';
import { colors } from '../../styles';
import { RFPercentage } from 'react-native-responsive-fontsize';

interface StateProps {
  movies: IMovie[];
  userId: string;
  selected: IMovie;
  open: boolean;
}

interface DispatchProps {
  likeMovieRequest(movieId: number): void;
  getMovieLikeRequest(movieId: number): void;
  removeMovieRequest(): void;
  openModal(): void;
}

type Props = StateProps & DispatchProps;

const Movie: React.FC<Props> = ({selected, userId, likeMovieRequest, getMovieLikeRequest, removeMovieRequest, open, openModal}) => {
  const [star] = useState(new Animated.Value(0));
  const [heart] = useState(new Animated.Value(0));

  useEffect(() => {
    if(selected !== undefined) {
      getMovieLikeRequest(selected.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(selected?.users?.length !== undefined) {
      animateHeart();
    }
  }, [selected?.users])

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        removeMovieRequest();
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );


  const animateHeart = async () => {
    const like = selected.users?.includes(userId);
    heart.setValue(like ? 15 : 0);
    Animated.timing(heart, {
      toValue: like ? 15 : 0,
      duration: 10000,
    }).start();
  };
  
  const animateStar = async () => {
    // Animated.timing(star, {
    //   toValue: 1,
    //   duration: 1000,
    // }).start();
    openModal();
  };

  const handleHeart = () => {
    likeMovieRequest(selected.id);
  };

  return (
    <Container>
      <Opacity />
      {!selected?.users && (
        <ContainerLoading>
          <Loading />
        </ContainerLoading>
      )}
      {selected && (
        <>
        <ContainerMovie>
          <Item
            item={selected}
            uriImage={Config.URI_IMAGE + sizes.poster_sizes.w500}
            width={width}
            height={RFPercentage(30)}
            backdrop
          />
          <LinearGradient colors={colors.gradientTitle} style={{ position: "relative", bottom: RFPercentage( selected.title.length > 36 ? 9 : 6)}}>
            <Title>{selected.title}</Title>
          </LinearGradient>
        </ContainerMovie>
        <OverView>
          <ContainerHeader >
          {selected?.users && 
            <>
              <TouchableOpacity onPress={handleHeart}>
                <LottieView
                  style={{height: 50}}
                  source={images.animation.heart}
                  progress={heart}
                />
              </TouchableOpacity>
              <TouchableHighlight style={{ position: 'absolute', right: 50, top: 2 }} onPress={animateStar}>
                <LottieView
                  style={{ width: 45 }}
                  source={images.animation.star}
                  progress={star}
                />
              </TouchableHighlight>
            </>
          }
          </ContainerHeader>
          <ContainerRating>
            <AirbnbRating
              count={5}
              selectedColor="#D95E5F"
              showRating={false}
              defaultRating={Math.floor(selected.vote_average / 2)}
              size={10}
              isDisabled={true}
            />
          </ContainerRating>
          <CustomTitle>Resumo</CustomTitle>
          <Desctiption>{selected.overview}</Desctiption>
          <CustomTitle>Cast</CustomTitle>
          <ListCast movieId={selected.id} />
          <CustomTitle>Avaliações</CustomTitle>
          <ListRating />
        </OverView>
      </>
      )}
    <UserRating open={open} />
    </Container>
  );
};

const mapStateToProps = ({movie, auth}: ApplicationState) => ({
  movies: movie.data,
  userId: auth.data._id,
  selected: movie.selectedMovies[movie.selectedMovies.length - 1],
  open: movie.modal,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(MovieActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movie);
