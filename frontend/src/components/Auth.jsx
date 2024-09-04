import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authUser, logout } from '../store/actions';

const Auth = ({ authUser, authType }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authUser(authType || 'login', formData);
  };

  const { username, password } = formData;

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="username">
          username
        </label>
        <input
          type="text"
          value={username}
          name="username"
          onChange={handleChange}
          autoComplete="off"
          className="form-input"
        />
        <label className="form-label" htmlFor="password">
          password
        </label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
          autoComplete="off"
          className="form-input"
        />
        <div className="buttons_center">
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { authUser, logout })(Auth);
