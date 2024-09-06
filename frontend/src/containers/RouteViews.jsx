import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AuthPage from '../pages/AuthPage';
import CreatePollPage from '../pages/CreatePollPage';
import PollPage from '../pages/PollPage';
import TestPage from '../pages/TestPage';
import { useSelector } from 'react-redux';

const RouteViews = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            auth.isAuthenticated ? <Navigate to="/" /> : <AuthPage authType="login" isAuthenticated={auth.isAuthenticated} />
          }
        />
        <Route
          path="/register"
          element={
            auth.isAuthenticated ? <Navigate to="/" /> : <AuthPage authType="register" isAuthenticated={auth.isAuthenticated} />
          }
        />
        <Route
          path="/poll/new"
          element={
            auth.isAuthenticated ? <CreatePollPage isAuthenticated={auth.isAuthenticated} /> : <Navigate to="/login" />
          }
        />
        <Route path="/poll/:id" element={<PollPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </main>
  );
};

export default RouteViews;
