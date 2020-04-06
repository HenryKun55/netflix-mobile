import styled from 'styled-components/native';
import { colors } from '../../styles';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: ${({ loading }: { loading: boolean }) => loading ? `${RFPercentage(20)}px` : 'auto'};
  background-color: ${colors.background};
  margin: 20px 0;
`;