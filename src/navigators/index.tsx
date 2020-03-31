import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StatusBar from '@react-native-community/status-bar';

import * as AuthActions from '../store/ducks/auth/actions';
import {ApplicationState} from '../store';

import {AppStack, AuthStack} from './navigators';
import {IUser} from '../types/IUser';
import {colors} from '../styles';

import 'react-native-gesture-handler';

interface StateProps {
  user: IUser;
}

interface DispatchProps {
  getAuth(): void;
}

type Props = StateProps & DispatchProps;

const Navigator: React.FC<Props> = ({user, getAuth}) => {
  StatusBar.setBackgroundColor(colors.background, true);

  useEffect(() => {
    getAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {!user.token ? <AuthStack /> : <AppStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const mapStateToProps = ({auth}: ApplicationState) => ({
  user: auth.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigator);
