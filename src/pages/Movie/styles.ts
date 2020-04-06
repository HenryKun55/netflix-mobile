import styled from 'styled-components/native';
import SafeAreaView from 'react-native-safe-area-view';
import {width} from '../../config';

import {colors} from '../../styles';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const Container = styled(SafeAreaView)`
  background-color: ${colors.background};
  flex: 1;
  z-index: 0;
`;

export const ContainerMovie = styled.View``;

export const Opacity = styled.View`
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.1);
  height: ${RFPercentage(7)}px;
  width: 100%;
  z-index: 1;
`;

export const OverView = styled.ScrollView`
  padding: 0 20px;
  margin-top: -${RFPercentage(5)}px;
  flex: 1;
`;

export const Title = styled.Text`
  padding: 10px 0;
  margin: 0 20px;
  color: #fff;
  width: 80%;
  font-size: 25px;
  font-weight: bold;
`;

export const CustomTitle = styled.Text`
  font-size: 16px;
  padding: 10px 0 0;
  padding-bottom: 0;
  color: #fff;
  font-weight: bold;
`;

export const ContainerRating = styled.View`
  padding: 0 0 10px;
  margin-left: -4px;
  align-items: flex-start;
`;

export const Desctiption = styled.Text`
  font-size: 14px;
  padding: 10px 0;
  font-style: italic;
  color: #fff;
`;

export const ContainerHeader = styled.View`
  position: absolute;
  flex-direction: row;
  right: ${RFPercentage(1)}px;
`;

export const ContainerLoading = styled.View`
  position: absolute;
  right: ${RFPercentage(5)}px;
  bottom: ${RFPercentage(29)}px;
`;
