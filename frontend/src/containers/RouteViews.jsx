import React from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getCurrentPoll } from '../store/actions';
import HomePage from '../pages/HomePage';
import AuthPage from '../pages/AuthPage';
import PollPage from '../pages/PollPage';
import CreatePollPage from '../pages/CreatePollPage';
import TestPage from '../pages/TestPage';

const RouteViews = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { id } = useParams(); // Extract `id` from URL params

  const handleGetCurrentPoll = (id) => {
    dispatch(getCurrentPoll(id));
  };

  React.useEffect(() => {
    if (id) {
      handleGetCurrentPoll(id);
    }
  }, [id, handleGetCurrentPoll]);

  const poll = useSelector((state) => state.currentPoll); // Get the poll from the state

  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            auth.isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <AuthPage authType="login" isAuthenticated={auth.isAuthenticated} />
            )
          }
        />
        <Route
          path="/register"
          element={
            auth.isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <AuthPage authType="register" isAuthenticated={auth.isAuthenticated} />
            )
          }
        />
        <Route
          path="/poll/new"
          element={
            auth.isAuthenticated ? (
              <CreatePollPage isAuthenticated={auth.isAuthenticated} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/poll/:id"
          element={<PollPage poll={poll} />}
        />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </main>
  );
};

export default RouteViews;
