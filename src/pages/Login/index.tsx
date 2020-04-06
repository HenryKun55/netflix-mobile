import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import * as AuthActions from '../../store/ducks/auth/actions';
import {IUser} from '../../types/IUser';

import {Container, ContainerTitle, ContainerInputs, Title} from './styles';
import {colors} from '../../styles';
import Form from '../../components/Form';

import {ApplicationState} from '../../store';
import Loading from '../../components/Loading';

interface LoginProps {
  state: string;
  loading: boolean;
  loadInit: boolean;
}

interface DispatchProps {
  authRequest(user: IUser): void;
  storeRequest(user: IUser): void;
  changeState(state: string): void;
}

type Props = LoginProps & DispatchProps;

const Login: React.FC<Props> = ({
  authRequest,
  storeRequest,
  changeState,
  state,
  loading,
  loadInit,
}) => {
  const handleLogin = (data: IUser) => {
    authRequest(data);
  };

  const handleState = (state: string) => {
    changeState(state);
  };

  const handleStore = (data: IUser) => {
    storeRequest(data);
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
      {loadInit ? <Loading /> : (
        <Form
          auth={handleLogin}
          store={handleStore}
          state={state}
          loading={loading}
          handleState={handleState}
        />
      )}
      </ContainerInputs>
    </Container>
  );
};

const mapStateToProps = ({auth}: ApplicationState) => ({
  state: auth.state,
  loading: auth.loading,
  loadInit: auth.loadInit,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
