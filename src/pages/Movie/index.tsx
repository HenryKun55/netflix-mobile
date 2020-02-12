import React from 'react';
import {
  Container,
  ContainerRating,
  ContainerScroll,
  OverView,
  Title,
  TitleDescription,
  Desctiption,
} from './styles';
import {useRoute} from '@react-navigation/native';
import Item from '../../components/ListMovies/Item';
import {IMovie} from '../../types/IMovie';
import {URI_IMAGE} from 'react-native-dotenv';
import {sizes} from '../../config/sizes';
import {width} from '../../config/window';
import {AirbnbRating} from 'react-native-ratings';

const Movie: React.FC<IMovie> = () => {
  const {item}: {item: IMovie} = useRoute().params;

  return (
    <Container>
      <ContainerScroll>
        <Item
          item={item}
          uriImage={URI_IMAGE + sizes.poster_sizes.w500}
          width={width}
          height={200}
          backdrop
        />
        <OverView>
          <Title>{item.title}</Title>
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
          <TitleDescription>Resumo</TitleDescription>
          <Desctiption>{item.overview}</Desctiption>
        </OverView>
      </ContainerScroll>
    </Container>
  );
};

export default Movie;
