import styled, {css} from 'styled-components/native';
import {colors} from '../../styles';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
  justify-content: center;
  align-items: center;
`;

export const TouchableImage = styled.TouchableHighlight`
  flex: 0.25;
  ${({borderRadius}: {borderRadius: number}) => css`
    border-radius: ${borderRadius}px;
  `}
`;

export const Title = styled.Text`
  font-size: ${RFPercentage(3)}px;
  color: ${colors.white};
  margin-top: ${RFPercentage(2)}px;
  font-weight: bold;
`;
