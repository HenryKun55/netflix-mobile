import styled, {css} from 'styled-components/native';
import {colors} from '../../styles';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  margin-top: 20px;
  align-items: center;
  flex-direction: row;
  padding: 20px 10px;
`;

export const ContainerImage = styled.TouchableHighlight`
  flex: 1;
`;

export const ContainerTitle = styled.View`
  flex: 4;
`;

export const Title = styled.Text`
  ${({title}: {title?: boolean}) => css`
    font-size: ${title ? RFPercentage(4) : RFPercentage(2.5)}px;
    font-weight: bold;
    line-height: ${RFPercentage(4)}px;
    color: ${title ? colors.white : colors.mediumGray};
  `}
`;
