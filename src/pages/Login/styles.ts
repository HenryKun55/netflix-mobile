import styled from 'styled-components/native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import {colors} from '../../styles';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${colors.background};
  align-items: center;
  justify-content: center;
`;

export const ContainerTitle = styled.View`
  flex: 1;
  background: ${colors.background};
  align-items: center;
  justify-content: center;
`;

export const ContainerInputs = styled.View`
  flex: 2;
  width: auto;
  background: ${colors.background};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFPercentage(7)}px;
  color: ${({color}: {color?: string}) => color || colors.white};
  font-family: 'Montserrat-Regular';
`;
