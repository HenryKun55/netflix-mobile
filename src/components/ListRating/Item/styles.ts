import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { colors } from '../../../styles';

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
  color: ${colors.white};
  font-size: 18px;
  font-style: italic;
`;

export const LikeText = styled.Text`
  position: absolute; 
  color: ${colors.mediumGray};
  top: ${RFPercentage(2.3)}px;
  right: ${RFPercentage(0.9)}px; 
`;
