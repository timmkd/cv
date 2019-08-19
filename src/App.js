import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import Main from './app/Main';

const App = props => (
  <Provider store={store}>
    <Main {...props} />
  </Provider>
);

export default App;
