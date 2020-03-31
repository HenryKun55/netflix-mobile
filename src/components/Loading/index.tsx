import React from 'react';
import {Container, LoadingComponent} from './styles';
import { colors } from '../../styles';

const Loading: React.FC<{loading?: boolean, color?: string}> = ({loading, color}) => (
  <Container loading={loading}>
    <LoadingComponent color={color || colors.white} />
  </Container>
);

export default Loading;
