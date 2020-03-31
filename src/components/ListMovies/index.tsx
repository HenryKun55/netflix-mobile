/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {Container, ContainerBanner, ContainerMovie, TitleMovie} from './styles';
import {FlatList, View} from 'react-native';
import Loading from '../Loading';
import {IMovie} from '../../types/IMovie';
import { CastMovie } from '../../types/CastMovie';
import {sizes} from '../../config/sizes';
import Item from './Item';
import Separator from './Separator';
import {ApplicationState} from '../../store';
import Config from 'react-native-config';
import * as MovieActions from '../../store/ducks/movie/actions';
import {RFPercentage} from 'react-native-responsive-fontsize';

interface StateProps {
  pageNumber: number;
  movies: IMovie[];
  selectedGenre: number;
  loading: boolean;
  inCast?: boolean;
  otherMovies?: CastMovie[];
}

interface DispatchProps {
  setMoviesRequest(genre: number, pageNumber: number): void;
  setPageRequest(pageNumber: number): void;
}

type Props = StateProps & DispatchProps;

const ListMovies: React.FC<Props> = ({
  pageNumber,
  selectedGenre,
  movies,
  inCast,
  loading,
  setMoviesRequest,
  setPageRequest,
  otherMovies,
}) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    setMoviesRequest(selectedGenre, pageNumber);
  }, [pageNumber, selectedGenre]);

  const setNewPage = () => {
    setPageRequest(pageNumber + 1);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current!.scrollToOffset({animated: true, offset: 0});
    }
    setPageRequest(1);
  }, [selectedGenre]);

  return (
    <Container>
      {movies.length > 0 ? (
        <>
        {inCast ? null : (
          <ContainerMovie>
            <Item
              item={movies[0]}
              uriImage={Config.URI_IMAGE + sizes.poster_sizes.w342}
              width={RFPercentage(40)}
              height={RFPercentage(45)}
            />
            <TitleMovie>{movies[0].title}</TitleMovie>
          </ContainerMovie>
        )}
          <ContainerBanner>
            <FlatList
              ref={ref}
              initialNumToRender={5}
              horizontal={true}
              maxToRenderPerBatch={5}
              windowSize={5}
              data={movies.slice(1, movies.length)}
              keyExtractor={movie => String(movie.id)}
              onEndReached={setNewPage}
              onEndReachedThreshold={0.1}
              ItemSeparatorComponent={() => <Separator />}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <Item
                  item={item}
                  width={RFPercentage(18)}
                  uriImage={Config.URI_IMAGE + sizes.poster_sizes.w185}
                  borderRadius={12}
                />
              )}
              extraData={selectedGenre}
            />
          </ContainerBanner>
        </>
      ) : (
        <Loading loading={loading} />
      )}
    </Container>
  );
};

const mapStateToProps = ({genre, movie}: ApplicationState) => ({
  selectedGenre: genre.selected,
  pageNumber: movie.pageNumber,
  movies: movie.data,
  loading: genre.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(MovieActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListMovies);
