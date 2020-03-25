/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
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

interface ListCastState {
  movieId: number;
  cast: Cast[] 
}

interface DispatchProps {
  setCastRequest(movieId: number): void
}

type Props = ListCastState & DispatchProps;

const ListCast: React.FC<Props> = ({ movieId, cast, setCastRequest }) => {

  useEffect(() => {
    setCastRequest(movieId);
  }, [])

  return (
    <FlatList
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
          borderRadius={100}
        />
      )}
    />
  );
};

const mapStateToProps = ({cast}: ApplicationState) => ({
  cast: cast.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(CastActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCast);