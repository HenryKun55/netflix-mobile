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
  ContainerMovies,
  OverView,
  Title,
  CustomTitle,
  Desctiption,
  Opacity,
} from './styles';
import {useRoute} from '@react-navigation/native';
import Loading from '../../components/Loading';
import {IMovie} from '../../types/IMovie';
import {sizes} from '../../config/sizes';
import {width} from '../../config';
import ListCast from '../../components/ListCast';
import LottieView from 'lottie-react-native';
import {images} from '../../assets';
import {TouchableOpacity, Animated, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {ApplicationState} from '../../store';
import * as MovieActions from '../../store/ducks/movie/actions';
import { colors } from '../../styles';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Person } from '../../types/Person';
import FastImage from 'react-native-fast-image';
import { calculateAge } from '../../util';
import CastMovies from '../../components/CastMovies';

interface StateProps {
  person: Person | undefined;
  loading: boolean;
}

// interface DispatchProps {
//   likeMovieRequest(movieId: number): void;
//   getMovieLikeRequest(movieId: number): void;
// }

type Props = StateProps /* & DispatchProps */;

const Actor: React.FC<Props> = ({person, loading}) => {
  const [progress] = useState(new Animated.Value(0));
  const animation = useRef(null);

  // useEffect(() => {
  //   getMovieLikeRequest(item.id);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   getMovieLike();
  // }, [movies])

  // const getMovieLike = () => {
  //   movies.map(m => {
  //     if (m.id === item.id) {
  //       item.users = m.users;
  //       animateHeart();
  //     }
  //   });
  // };

  // const animateHeart = async () => {
  //   const like = item.users?.includes(userId);
  //   progress.setValue(like ? 15 : 0);
  //   Animated.timing(progress, {
  //     toValue: like ? 15 : 0,
  //     duration: 10000,
  //   }).start();
  // };

  // const handleHeart = () => {
  //   likeMovieRequest(item.id);
  // };

  return (
    <Container>
      <Opacity />
      {person && (
        <>
          <ContainerMovie>
            <FastImage
              style={{
                width: RFPercentage(100),
                height: RFPercentage(30),
                opacity: 0.6
              }}
              source={{
                uri: Config.URI_IMAGE + sizes.poster_sizes.w780 + person.profile_path,
                priority: FastImage.priority.low,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <FastImage
              style={{
                position: 'relative',
                bottom: RFPercentage(18),
                left: RFPercentage(2),
                width: RFPercentage(15),
                height: RFPercentage(15),
                borderRadius: RFPercentage(7.5),
              }}
              source={{
                uri: Config.URI_IMAGE + sizes.poster_sizes.w500 + person.profile_path,
                priority: FastImage.priority.low,
              }}
              resizeMode={FastImage.resizeMode.center}
            />
            <Title>{person.name}</Title>
            <Title age>{`${calculateAge(new Date(person.birthday))} anos`}</Title>
          </ContainerMovie>
          <LinearGradient colors={colors.gradientTitle} style={{ height: RFPercentage(3.5), position: "relative", bottom: RFPercentage(26)}} />
        <OverView>
          <ContainerHeader>
            {/* <TouchableOpacity onPress={handleHeart}>
              <LottieView
                ref={animation}
                style={{height: 50}}
                source={images.animation.heart}
                progress={progress}
              />
            </TouchableOpacity> */}
          </ContainerHeader>
          <ContainerRating>
            {/* <AirbnbRating
              count={5}
              selectedColor="#D95E5F"
              showRating={false}
              defaultRating={Math.floor(item.vote_average / 2)}
              size={10}
              isDisabled={true}
            /> */}
          </ContainerRating>
          <CustomTitle>Biografia</CustomTitle>
            <Desctiption>{person.biography || `Não possui`}</Desctiption>
          <CustomTitle>Cast</CustomTitle>
            <CastMovies />
        </OverView>
      </>
      )}
    </Container>
  );
};

const mapStateToProps = ({cast}: ApplicationState) => ({
  person: cast.selected,
  loading: cast.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(MovieActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Actor);
