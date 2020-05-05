import styled, {css} from 'styled-components/native';
import {colors} from '../../styles';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
  padding: 0 20px;
  align-items: center;
`;

export const Header = styled.View`
  flex: 1;
  background: ${colors.background};
  align-items: center;
  margin-top: 50px;
`;

export const TouchableImage = styled.TouchableHighlight`
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

export const Content = styled.View`
  flex: 2;
  width: 100%;
  background: ${colors.background};
  justify-content: flex-start;
  margin-top: 50px;
`;

export const CustomTitle = styled.Text`
  font-size: 16px;
  padding: 10px 0 0;
  padding-bottom: 0;
  color: #fff;
  font-weight: bold;
`;
