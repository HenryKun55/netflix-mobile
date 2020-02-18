import React from 'react';

import Navigator from './navigators';
import {Provider} from 'react-redux';

import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
