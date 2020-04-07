import styled from 'styled-components/native';
import SafeAreaView from 'react-native-safe-area-view';
import {colors} from '../../styles';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled(SafeAreaView)`
  background-color: ${colors.background};
  flex: 1;
  padding: 0 20px;
`;

export const ContainerMovie = styled.View`
  flex-direction: row;
  padding: 10px 0;
  align-items: flex-start;
  
`;

export const ContentMovie = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ContainerTouchable = styled.TouchableHighlight`
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  line-height: ${RFPercentage(3.5)}px;
  font-size: ${RFPercentage(2.5)}px;
  width: ${RFPercentage(20)}px;
`;

export const GenreText = styled.Text`
  color: ${colors.lightGray};
  line-height: ${RFPercentage(3.5)}px;
  font-size: ${RFPercentage(2)}px;
  width: ${RFPercentage(20)}px;
`;

