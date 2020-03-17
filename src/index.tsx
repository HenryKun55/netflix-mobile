import React from 'react';

import Navigator from './navigators';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';

import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <Navigator />
    <FlashMessage position="top" />
  </Provider>
);

export default App;
