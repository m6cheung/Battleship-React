import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Game from './containers/Game';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}

export default App;
