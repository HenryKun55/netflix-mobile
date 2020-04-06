import React from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import {bindActionCreators, Dispatch} from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as MovieActions from '../../store/ducks/movie/actions';
import * as CastActions from '../../store/ducks/cast/actions';

interface ButtonProps {
  onPress(): void;
  isMovie?: boolean;
}

interface DispatchProps {
  removeMovieRequest(): void;
  removeCastRequest(): void;
}

type Props = ButtonProps & DispatchProps;

const BackButton: React.FC<Props> = ({ onPress, removeMovieRequest, removeCastRequest, isMovie }) => {

  const handleOnPress = () => {
    if(isMovie) {
      removeMovieRequest();
    } else {
      removeCastRequest();
    }
    setTimeout(onPress, 0);
  }

  return (
    <TouchableOpacity style={{ marginLeft: 10, marginTop: 15 }} onPress={handleOnPress}>
      <Icon name="arrow-back" size={24} color="#FFF" />
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({...MovieActions, ...CastActions}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(BackButton);
