import styled, {css} from 'styled-components/native';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const Container = styled.View``;

export const ContainerTitle = styled.View`
  padding: ${RFPercentage(4)}px ${RFPercentage(1.5)}px;
`;

export const Title = styled.Text`
  color: #fdf0e1;
  font-weight: bold;
  font-size: ${RFPercentage(2.7)}px;
  padding-bottom: 10px;
  ${({selected}: {selected: any}) =>
    selected &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: white;
    `};
`;
