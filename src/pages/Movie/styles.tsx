import styled from 'styled-components/native';
import SafeAreaView from 'react-native-safe-area-view';
import {width} from '../../config/window';

export const Container = styled(SafeAreaView)`
  background-color: #211102;
  flex: 1;
`;

export const OverView = styled.ScrollView`
  padding: 0 20px;
  flex: 1;
`;

export const Title = styled.Text`
  padding: 10px 0;
  color: #fff;
  width: ${Math.floor(width / 1.4)}px;
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

export const ContainerCast = styled.View`
  padding: 20px 0;
`;

export const ContainerHeader = styled.View`
  position: absolute;
  right: 10px;
  top: 20px;
`;
