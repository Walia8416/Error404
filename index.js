import 'react-native-gesture-handler';

import App from './src/App';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
/**
 * @format
 */
import React from 'react';
import {name as appName} from './app.json';
// redux store
import {store} from './src/store/store';

export const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
