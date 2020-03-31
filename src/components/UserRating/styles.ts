import styled from 'styled-components/native';
import {width} from '../../config';

import {colors} from '../../styles';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerRating = styled.View`
    margin-bottom: 50px;
`;

export const Input = styled.TextInput`
    flex: 1;
    background-color: ${colors.white}; 
    border-radius: 20px; 
    padding: 10px 20px; 
    font-size: 16px;
`;

export const ButtonContainer = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 20px;
    margin-left: 10px;
    background-color: ${colors.secondary};
    align-items: center;
    justify-content: center;
`
