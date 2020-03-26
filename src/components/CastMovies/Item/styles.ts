import styled, {css} from 'styled-components/native';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const Container = styled.TouchableHighlight`
  ${({
    widthContainer,
    borderRadiusContainer,
  }: {
    widthContainer?: number;
    borderRadiusContainer?: number;
  }) => css`
    width: ${widthContainer || RFPercentage(34.5)}px;
    border-radius: ${borderRadiusContainer || 0}px;
  `}
`;
