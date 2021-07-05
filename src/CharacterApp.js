import React, {Component} from 'react';
import {Provider} from 'react-redux';

import configureStore from './redux/store';
import AppContainer from './AppContainer';

const store = configureStore();

export default class CharacterApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
