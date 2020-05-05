/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {Container, ContainerBanner, ContainerMovie, TitleMovie} from './styles';
import {FlatList, View} from 'react-native';
import Loading from '../Loading';
import {IMovie} from '../../types/IMovie';
import {sizes} from '../../config/sizes';
import Item from './Item';
import Separator from './Separator';
import {ApplicationState} from '../../store';
import Config from 'react-native-config';
import * as MovieActions from '../../store/ducks/movie/actions';
import {RFPercentage} from 'react-native-responsive-fontsize';

interface StateProps {
  pageNumber: number;
  favorites: IMovie[];
  loading: boolean;
  inCast?: boolean;
}

interface DispatchProps {
  getFavoritesRequest(pageNumber: number, clear?: boolean): void;
  setPageRequest(pageNumber: number): void;
}

type Props = StateProps & DispatchProps;

const ListFavorites: React.FC<Props> = ({
  pageNumber,
  favorites,
  loading,
  getFavoritesRequest,
}) => {

  useEffect(() => {
    getFavoritesRequest(pageNumber, true);
  }, []);
  
  const getFavoritesMovies = () => {
    getFavoritesRequest(pageNumber);
  }

  return (
    <Container>
      {favorites.length > 0 ? (
        <ContainerBanner>
          <FlatList
            initialNumToRender={5}
            horizontal={true}
            maxToRenderPerBatch={5}
            windowSize={5}
            data={favorites}
            keyExtractor={movie => String(movie.id)}
            onEndReached={favorites.length > 9 ? getFavoritesMovies : null}
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
          />
        </ContainerBanner>
      ) : (
        <Loading loading={loading} />
      )}
    </Container>
  );
};

const mapStateToProps = ({genre, movie}: ApplicationState) => ({
  pageNumber: movie.pageNumberFavorites,
  favorites: movie.favorites,
  loading: genre.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(MovieActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListFavorites);
