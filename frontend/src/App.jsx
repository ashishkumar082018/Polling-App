import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

import { store } from './store';
import { setToken, setCurrentUser, addError } from './store/actions';

import NavBar from './containers/NavBar';
import RouteViews from './containers/RouteViews';

const App = () => {
  useEffect(() => {
    if (localStorage.jwtToken) {
      setToken(localStorage.jwtToken);
      try {
        store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
      } catch (err) {
        store.dispatch(setCurrentUser({}));
        store.dispatch(addError(err));
      }
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <>
          <NavBar />
          <RouteViews />
        </>
      </Router>
    </Provider>
  );
};

export default App;
