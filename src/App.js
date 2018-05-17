import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { persistStore } from 'redux-persist';
import store from './data/store';

import Content from './components/content';

const history = createBrowserHistory();
persistStore(store);

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Content />
    </Router>
  </Provider>
);

export default App;
