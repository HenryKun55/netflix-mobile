/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useRef} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {Container, ContainerMovie, TitleMovie} from './styles';
import {FlatList, ScrollView} from 'react-native';
import Loading from '../Loading';
import {IMovie} from '../../types/IMovie';
import {sizes} from '../../config/sizes';
import Item from './Item';
import Separator from './Separator';
import {ApplicationState} from '../../store';
import Config from 'react-native-config';
import * as MovieActions from '../../store/ducks/movie/actions';
import {colors} from '../../styles';

interface StateProps {
  movies: IMovie[];
  selectedGenre: number;
}

interface DispatchProps {
  setMoviesRequest(genre: number, pageNumber: number): void;
}

type Props = StateProps & DispatchProps;

const ListMovies: React.FC<Props> = ({
  selectedGenre,
  movies,
  setMoviesRequest,
}) => {
  const ref = useRef<any>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function getMovies() {
    setMoviesRequest(selectedGenre, 1);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    if (ref.current) {
      ref.current!.scrollToOffset({animated: true, offset: 0});
    }
    setLoading(true);
    getMovies();
  }, [selectedGenre]);

  return (
    <Container>
      {movies.length > 0 && !loading ? (
        <>
          <ContainerMovie>
            <Item
              item={movies[0]}
              uriImage={Config.URI_IMAGE + sizes.poster_sizes.w500}
              width={300}
              height={450}
              borderRadius={30}
            />
            <TitleMovie>{movies[0].title}</TitleMovie>
          </ContainerMovie>

          <ScrollView>
            <FlatList
              ref={ref}
              initialNumToRender={5}
              windowSize={5}
              horizontal={true}
              data={movies.slice(1, movies.length)}
              keyExtractor={movie => String(movie.id)}
              onEndReached={() => getMovies()}
              onEndReachedThreshold={0.1}
              ItemSeparatorComponent={() => <Separator />}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <Item
                  item={item}
                  uriImage={Config.URI_IMAGE + sizes.poster_sizes.w185}
                  borderRadius={12}
                />
              )}
              extraData={selectedGenre}
            />
          </ScrollView>
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

const mapStateToProps = ({genre, movie}: ApplicationState) => ({
  selectedGenre: genre.selected,
  movies: movie.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(MovieActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListMovies);
