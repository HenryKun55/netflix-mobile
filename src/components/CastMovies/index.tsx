/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import Loading from '../Loading';
import {sizes} from '../../config/sizes';
import Separator from './Separator';
import {ApplicationState} from '../../store';
import Config from 'react-native-config';
import {RFPercentage} from 'react-native-responsive-fontsize';
import { CastMovie } from '../../types/CastMovie';

import Item from './Item';
import {Container} from './styles';

interface StateProps {
  castMovies: CastMovie[] | undefined;
  loading: boolean;
}

type Props = StateProps;

const CastMovies: React.FC<Props> = ({
  castMovies,
  loading,
}) => {
  return (
    <Container>
      {!loading ? (
        <FlatList
          initialNumToRender={5}
          horizontal={true}
          maxToRenderPerBatch={5}
          windowSize={5}
          data={castMovies}
          keyExtractor={movie => String(movie.id)}
          onEndReachedThreshold={0.1}
          ItemSeparatorComponent={() => <Separator />}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <Item
              item={item}
              width={RFPercentage(18)}
              uriImage={Config.URI_IMAGE + sizes.poster_sizes.w185}
              borderRadius={12}
              widthContainer={RFPercentage(18)}
            />
          )}
        />
      ) : (
        <Loading loading={loading} />
      )}
    </Container>
  );
};

const mapStateToProps = ({cast}: ApplicationState) => ({
  castMovies: cast.selected?.movies,
  loading: cast.loading,
});

export default connect(
  mapStateToProps,
)(CastMovies);
