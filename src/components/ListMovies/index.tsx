/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useRef} from 'react';
import {URI_IMAGE} from 'react-native-dotenv';
import {Container, ContainerMovie, TitleMovie} from './styles';
import {FlatList, ScrollView} from 'react-native';
import Loading from '../Loading';
import {discoverMovies} from '../../services/movie';
import {IMovie} from '../../types/IMovie';
import {sizes} from '../../config/sizes';
import Item from './Item';
import Separator from './Separator';

const ListMovies: React.FC<{genre: number}> = ({genre = 28}) => {
  const ref = useRef<any>(null);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function getMovies(
    pageNumber = page,
    refresh = false,
  ): Promise<boolean> {
    const data = await discoverMovies(genre, pageNumber);
    setMovies(
      !refresh
        ? (prevstate: IMovie[]) => [...prevstate, ...data.results]
        : [...data.results],
    );
    setPage(page + 1);
    setLoading(false);
    return true;
  }

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current!.scrollToOffset({animated: true, offset: 0});
    }
    setLoading(true);
    getMovies(1, true);
  }, [genre]);

  return (
    <Container>
      {movies.length > 0 && !loading ? (
        <>
          <ContainerMovie>
            <Item
              item={movies[0]}
              uriImage={URI_IMAGE + sizes.poster_sizes.w500}
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
                  uriImage={URI_IMAGE + sizes.poster_sizes.w185}
                  borderRadius={12}
                />
              )}
              extraData={genre}
            />
          </ScrollView>
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default ListMovies;
