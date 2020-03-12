import styled from 'styled-components/native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {colors} from '../../styles';

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  background: ${colors.custom};
  border-radius: 15px;
  margin: ${RFPercentage(5)}px;
  height: ${RFPercentage(5)}px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
`;
