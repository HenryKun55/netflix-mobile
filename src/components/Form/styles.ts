import styled, {css} from 'styled-components/native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {colors} from '../../styles';

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  height: ${RFPercentage(5)}px;
  ${({isValid, second}: {isValid: boolean; second?: boolean}) =>
    css`
      margin: ${second ? RFPercentage(0) : RFPercentage(5)}px;
      opacity: ${isValid ? 0.7 : 1};
      background: ${second ? colors.background : colors.secondary};
    `}
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
`;
