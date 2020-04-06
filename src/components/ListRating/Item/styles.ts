import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  padding: 10px 0;
  align-items: flex-start;
  
`;

export const ContainerTouchable = styled.TouchableHighlight`
`;

export const Comment = styled.Text`
  flex: 1;
  margin-top: 15px;
  margin-left: -77px;
  color: #fff;
  font-size: 18px;
  font-style: italic;
`;
