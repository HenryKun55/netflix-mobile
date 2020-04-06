import styled, { css } from 'styled-components/native';
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
  margin-top: -${RFPercentage(25)}px;
  flex: 1;
`;

export const Title = styled.Text`
  bottom: ${RFPercentage(32.5)}px;
  left: ${RFPercentage(16)}px;
  margin-left: 20px;
  color: #fff;
  font-weight: bold;
  ${({ age }: {age?: boolean}) => css`
    font-size: ${age ? RFPercentage(3) : RFPercentage(4)}px;
  `}
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

export const ContainerMovies = styled.View`
  padding: 20px 0;
  justify-content: center;
  align-items: center;
`;

export const ContainerHeader = styled.View`
  position: absolute;
  right: ${RFPercentage(1)}px;
`;
