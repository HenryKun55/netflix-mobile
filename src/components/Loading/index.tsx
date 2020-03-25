import React from 'react';
import {Container, LoadingComponent} from './styles';

const Loading: React.FC<{loading?: boolean}> = ({loading}) => (
  <Container loading={loading}>
    <LoadingComponent />
  </Container>
);

export default Loading;
