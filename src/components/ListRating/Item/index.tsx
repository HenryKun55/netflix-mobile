import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {images} from '../../../assets';
import {Container, ContainerTouchable, Name} from './styles';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';

import * as CastActions from '../../../store/ducks/cast/actions';
import { RFPercentage } from 'react-native-responsive-fontsize';

interface ItemCastProps {
  item: number;
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

  return (
    <ContainerTouchable onPress={() => console.log('opa')}>
      <Container>
        <FastImage
          key={item}
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
