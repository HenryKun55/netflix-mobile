import styled from 'styled-components/native';
import SafeAreaView from 'react-native-safe-area-view';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {colors} from '../../styles';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.background};
  align-items: center;
  margin: ${RFPercentage(3)}px 0;
  height: ${RFPercentage(30)}px;
`;

export const ContainerMovie = styled.View`
  margin-bottom: ${RFPercentage(0)}px;
`;