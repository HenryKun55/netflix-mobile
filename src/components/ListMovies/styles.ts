import styled from 'styled-components/native';
import SafeAreaView from 'react-native-safe-area-view';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {colors} from '../../styles';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.background};
  align-items: center;
`;

export const ContainerBanner = styled.View`
  margin-top: ${RFPercentage(3)}px;
`;

export const ContainerMovie = styled.View`
  margin-bottom: ${RFPercentage(0)}px;
`;

export const CustomTitle = styled.Text``;

export const TitleMovie = styled.Text`
  position: absolute;
  bottom: ${RFPercentage(0.5)}px;
  width: ${RFPercentage(30)}px;
  left: ${RFPercentage(5.4)}px;
  padding: 20px;
  color: #fff;
  text-align: center;
  font-size: ${RFPercentage(2.5)}px;
  background-color: rgba(0, 0, 0, 0.7);
`;
