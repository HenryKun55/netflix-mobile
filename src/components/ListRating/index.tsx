/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {FlatList} from 'react-native';
import Item from './Item';
import Separator from './Separator';

import {ApplicationState} from '../../store';
import * as CastActions from '../../store/ducks/cast/actions';
import Loading from '../Loading';

import { Container, Comment } from './styles'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { IMovie } from '../../types/IMovie';

interface ListRatingState {
  movie: IMovie | undefined;
}

interface DispatchProps {
  // setRatingRequest(movieId: number): void
}

type Props = ListRatingState & DispatchProps;

const ListRating: React.FC<Props> = ({ movie }) => {

  const ref = useRef<any>(null);

  const handleRatingUndefined = () => {
    return movie?.ratings === undefined
  }
  
  return (
    <Container loading={handleRatingUndefined()}>
    {handleRatingUndefined() && (<Loading />)}
    {!handleRatingUndefined() && movie?.ratings?.length === 0 && <Comment>Não possui comentários ainda :(</Comment>}
    {movie?.ratings?.length > 0 && !handleRatingUndefined() && (
      <FlatList
        ref={ref}
        windowSize={5}
        data={movie?.ratings}
        keyExtractor={rating => String(rating._id)}
        onEndReachedThreshold={0.1}
        ItemSeparatorComponent={() => <Separator />}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Item
            rating={item}
            borderRadius={RFPercentage(6.5)}
          />
        )}
        initialScrollIndex={0}
      />
    )}
    </Container>
  );
};

const mapStateToProps = ({movie}: ApplicationState) => ({
  movie: movie.selectedMovies[movie.selectedMovies.length - 1],
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(CastActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRating);