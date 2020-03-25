import React, {useState, useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {AirbnbRating} from 'react-native-ratings';
import Config from 'react-native-config';
import {
  Container,
  ContainerMovie,
  ContainerHeader,
  ContainerRating,
  ContainerCast,
  OverView,
  Title,
  CustomTitle,
  Desctiption,
  Opacity,
} from './styles';
import {useRoute} from '@react-navigation/native';
import Item from '../../components/ListMovies/Item';
import {IMovie} from '../../types/IMovie';
import {sizes} from '../../config/sizes';
import {width} from '../../config';
import ListCast from '../../components/ListCast';
import LottieView from 'lottie-react-native';
import {images} from '../../assets';
import {TouchableOpacity, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {ApplicationState} from '../../store';
import * as MovieActions from '../../store/ducks/movie/actions';
import { IUser } from '../../types/IUser';
import { colors } from '../../styles';
import { RFPercentage } from 'react-native-responsive-fontsize';

interface StateProps {
  movies: IMovie[];
  userId: IUser;
}

interface DispatchProps {
  likeMovieRequest(movieId: number): void;
  getMovieLikeRequest(movieId: number): void;
}

type Props = StateProps & DispatchProps;

const Movie: React.FC<Props> = ({movies, userId, likeMovieRequest, getMovieLikeRequest}) => {
  const {item}: {item: IMovie} = useRoute().params;
  const [progress] = useState(new Animated.Value(0));
  const animation = useRef(null);

  useEffect(() => {
    getMovieLikeRequest(item.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getMovieLike();
  }, [movies])

  const getMovieLike = () => {
    movies.map(m => {
      if (m.id === item.id) {
        item.users = m.users;
        animateHeart();
      }
    });
  };

  const animateHeart = async () => {
    const like = item.users?.includes(userId);
    progress.setValue(like ? 15 : 0);
    Animated.timing(progress, {
      toValue: like ? 15 : 0,
      duration: 10000,
    }).start();
  };

  const handleHeart = () => {
    likeMovieRequest(item.id);
  };

  return (
    <Container>
      <Opacity />
      <ContainerMovie>
        <Item
          item={item}
          uriImage={Config.URI_IMAGE + sizes.poster_sizes.w500}
          width={width}
          height={232}
          backdrop
        />
        <LinearGradient colors={colors.gradientTitle} style={{ position: "relative", bottom: RFPercentage( item.title.length > 36 ? 9 : 6)}}>
          <Title>{item.title}</Title>
        </LinearGradient>
      </ContainerMovie>
      <OverView>
        <ContainerHeader>
          <TouchableOpacity onPress={handleHeart}>
            <LottieView
              ref={animation}
              style={{height: 50}}
              source={images.animation.heart}
              progress={progress}
            />
          </TouchableOpacity>
        </ContainerHeader>
        <ContainerRating>
          <AirbnbRating
            count={5}
            selectedColor="#D95E5F"
            showRating={false}
            defaultRating={Math.floor(item.vote_average / 2)}
            size={10}
            isDisabled={true}
          />
        </ContainerRating>
        <CustomTitle>Resumo</CustomTitle>
        <Desctiption>{item.overview}</Desctiption>
        <CustomTitle>Cast</CustomTitle>
        <ContainerCast>
          <ListCast movieId={item.id} />
        </ContainerCast>
      </OverView>
    </Container>
  );
};

const mapStateToProps = ({movie, auth}: ApplicationState) => ({
  movies: movie.data,
  userId: auth.data._id,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(MovieActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movie);
