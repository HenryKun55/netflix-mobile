/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {FlatList} from 'react-native';
import Config from 'react-native-config';

import {sizes} from '../../config/sizes';
import Item from './Item';
import Separator from './Separator';

import {ApplicationState} from '../../store';
import * as CastActions from '../../store/ducks/cast/actions';
import { Cast } from '../../types/Cast';
import Loading from '../Loading';

import { Container } from './styles'
import { RFPercentage } from 'react-native-responsive-fontsize';

interface ListCastState {
  movieId: number;
  cast: Cast[] 
  loading: boolean;
}

interface DispatchProps {
  setCastRequest(movieId: number): void
}

type Props = ListCastState & DispatchProps;

const ListCast: React.FC<Props> = ({ movieId, loading, cast, setCastRequest }) => {

  const ref = useRef<any>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current!.scrollToOffset({animated: true, offset: 0});
    }
    setCastRequest(movieId);
  }, [movieId])

  return (
    <Container>
    {loading && cast.length == 0 ? <Loading /> : (
      <FlatList
        ref={ref}
        windowSize={5}
        horizontal={true}
        data={cast}
        keyExtractor={cast => String(cast.cast_id)}
        onEndReachedThreshold={0.1}
        ItemSeparatorComponent={() => <Separator />}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Item
            item={item}
            uriImage={Config.URI_IMAGE + sizes.poster_sizes.w185}
            borderRadius={RFPercentage(6.5)}
          />
        )}
        initialScrollIndex={0}
      />
    )}
    </Container>
  );
};

const mapStateToProps = ({cast}: ApplicationState) => ({
  cast: cast.data,
  loading: cast.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(CastActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCast);