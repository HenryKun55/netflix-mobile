import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {images} from '../../../assets';
import {Container, ContainerTouchable, Name} from './styles';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';

import * as CastActions from '../../../store/ducks/cast/actions';
import { Cast } from '../../../types/Cast'
import { RFPercentage } from 'react-native-responsive-fontsize';

interface ItemCastProps {
  item: Cast;
  uriImage: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
}

interface DispatchProps {
  setPersonRequest(personId: number): void;
}

type Props = ItemCastProps & DispatchProps;

const Item: React.FC<Props> = ({ 
  item,
  uriImage,
  width = RFPercentage(13),
  height = RFPercentage(13),
  borderRadius = 0,
  setPersonRequest 
})  => {

  const navigate = useNavigation();

  const handleActor = () => {
    setPersonRequest(item.id);
    navigate.navigate('Actor')
    return true;
  }

  return (
    <ContainerTouchable onPress={handleActor}>
      <Container>
        <FastImage
          key={item.id}
          style={{
            width,
            height,
            borderRadius,
          }}
          source={{
            uri: item.profile_path
              ? uriImage.concat(item.profile_path)
              : images.noPhoto,
            priority: FastImage.priority.low,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Name>{item.name}</Name>
      </Container>
    </ContainerTouchable>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(CastActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Item);
