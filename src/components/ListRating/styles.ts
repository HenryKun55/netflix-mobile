import styled from 'styled-components/native';
import { colors } from '../../styles';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: ${RFPercentage(20)}px;
  background-color: ${colors.background};
  align-items: center;
`;