import styled, {css} from 'styled-components/native';
import {colors} from '../../styles';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  ${({loading}: {loading?: boolean}) => css`
    height: ${loading ? RFPercentage(100) : RFPercentage(76)}px;
  `}
`;

export const LoadingComponent = styled.ActivityIndicator.attrs({
  size: 'small',
})``;
