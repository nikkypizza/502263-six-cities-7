import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Router } from 'react-router-dom';

import { setAuthStatus } from './api/api-actions.js';
import { createApi } from './api/api.js';
import { rootReducer } from './store/root-reducer.js';
import redirect from './store/middlewares/redirect';
import browserHistory from './services/browser-history.js';

import App from './components/app/app';


const api = createApi();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(setAuthStatus());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={browserHistory}>
        <App/>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
