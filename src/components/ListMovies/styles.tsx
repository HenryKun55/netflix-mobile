import styled from 'styled-components/native';
import SafeAreaView from 'react-native-safe-area-view';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #211102;
  align-items: center;
`;

export const ContainerMovie = styled.View`
  margin-bottom: 30px;
`;

export const TitleMovie = styled.Text`
  position: absolute;
  bottom: 0;
  width: 300px;
  text-align: center;
  padding: 10px;
  color: #fff;
  font-size: 20px;
  background-color: black;
  opacity: 0.7;
`;
