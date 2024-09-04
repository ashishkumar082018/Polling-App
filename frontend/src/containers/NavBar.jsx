import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../store/actions';

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar-container">
          <li>
            <Link className="navbar-brand" to="/">
              Poll app
            </Link>
          </li>
          {!auth.isAuthenticated ? (
            <>
              <li>
                <Link className="navbar-item" to="/register">
                  Register
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/login">
                  Login
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className="navbar-item" to="/poll/new">
                  New Poll
                </Link>
              </li>
              <li>
                <button className="navbar-item" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
        {auth.isAuthenticated && (
          <p className="navbar-user">Logged in as {auth.user.username}</p>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
