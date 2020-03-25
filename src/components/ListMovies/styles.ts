import styled from 'styled-components/native';
import SafeAreaView from 'react-native-safe-area-view';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {colors} from '../../styles';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.background};
  align-items: center;
`;

export const ContainerMovie = styled.View`
  margin-bottom: ${RFPercentage(0)}px;
`;

export const CustomTitle = styled.Text``;

export const TitleMovie = styled.Text`
  position: absolute;
  bottom: 4px;
  left: ${RFPercentage(0.71)}px;
  width: ${RFPercentage(34.5)}px;
  text-align: center;
  padding: 20px;
  color: #fff;
  font-size: ${RFPercentage(2.5)}px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: rgba(0, 0, 0, 0.7);
`;
