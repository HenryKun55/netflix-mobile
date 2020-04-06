import styled from 'styled-components/native';
import { colors } from '../../styles';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  height: ${({ loading }: { loading: boolean }) => loading ? `${RFPercentage(20)}px` : 'auto'} ;
  background-color: ${colors.background};
  margin-bottom: 20px;
`;

export const Comment = styled.Text`
  flex: 1;
  margin-top: 15px;
  color: #fff;
  font-size: 18px;
  font-style: italic;
  font-weight: bold;
`;
