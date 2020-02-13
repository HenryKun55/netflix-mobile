import React, {useState, useRef} from 'react';
import {AirbnbRating} from 'react-native-ratings';
import {URI_IMAGE} from 'react-native-dotenv';
import {
  Container,
  ContainerHeader,
  ContainerRating,
  ContainerCast,
  OverView,
  Title,
  CustomTitle,
  Desctiption,
} from './styles';
import {useRoute} from '@react-navigation/native';
import Item from '../../components/ListMovies/Item';
import {IMovie} from '../../types/IMovie';
import {sizes} from '../../config/sizes';
import {width} from '../../config/window';
import ListCast from '../../components/ListCast';
import LottieView from 'lottie-react-native';
import {images} from '../../assets';
import {TouchableOpacity, Animated} from 'react-native';

const Movie: React.FC<IMovie> = () => {
  const {item}: {item: IMovie} = useRoute().params;
  const [progress, setProgress] = useState(new Animated.Value(0));
  const animation = useRef(null);

  const handleHeart = () => {
    Animated.timing(progress, {
      toValue: 15,
      duration: 10000,
    }).start();
  };

  return (
    <Container>
      <Item
        item={item}
        uriImage={URI_IMAGE + sizes.poster_sizes.w500}
        width={width}
        height={230}
        backdrop
      />
      <OverView>
        <Title>{item.title}</Title>
        <ContainerHeader>
          <TouchableOpacity onPress={handleHeart}>
            <LottieView
              ref={animation}
              style={{height: 50}}
              source={images.animation.heart}
              progress={progress}
            />
            <CustomTitle />
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
          <ListCast id={item.id} />
        </ContainerCast>
      </OverView>
    </Container>
  );
};

export default Movie;
