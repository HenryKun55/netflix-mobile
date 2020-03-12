import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import * as AuthActions from '../../store/ducks/auth/actions';
import {IUser} from '../../types/IUser';

import {Container, ContainerTitle, ContainerInputs, Title} from './styles';
import {colors} from '../../styles';
import Input from '../../components/Input';

interface DispatchProps {
  authRequest(user: IUser): void;
}

const Login: React.FC<DispatchProps> = ({authRequest}) => {
  const handleLogin = (data: IUser) => {
    authRequest(data);
  };

  return (
    <Container>
      <ContainerTitle>
        <Text>
          <Title>Mo</Title>
          <Title color={colors.secondary}>vie</Title>
        </Text>
      </ContainerTitle>
      <ContainerInputs>
        <Input auth={handleLogin} />
      </ContainerInputs>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Login);
