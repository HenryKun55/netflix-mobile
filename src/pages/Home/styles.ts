import styled from 'styled-components/native';
import SafeAreaView from 'react-native-safe-area-view';
import {colors} from '../../styles';

export const Container = styled(SafeAreaView)`
  background-color: ${colors.background};
  flex: 1;
`;
