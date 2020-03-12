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

export const CustomTitle = styled.Text``;

export const TitleMovie = styled.Text`
  position: absolute;
  bottom: 4px;
  left: 4px;
  width: 300px;
  text-align: center;
  padding: 20px;
  color: #fff;
  font-size: 20px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: rgba(0, 0, 0, 0.7);
`;
