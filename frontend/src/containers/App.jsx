import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Correct import

import { store } from '../store';
import { setToken, setCurrentUser, addError } from '../store/actions';

import NavBar from './NavBar';
import RouteViews from './RouteViews';

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
