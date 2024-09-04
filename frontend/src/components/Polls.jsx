import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getPolls, getUserPolls } from '../store/actions';

const Polls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const polls = useSelector((state) => state.polls);

  useEffect(() => {
    dispatch(getPolls());
  }, [dispatch]);

  const handleSelect = (id) => {
    navigate(`/poll/${id}`);

  };

  const allPolls = polls.map((poll) => (
    <li onClick={() => handleSelect(poll._id)} key={poll._id}>
      {poll.question}
    </li>
  ));

  return (
    <React.Fragment>
      {auth.isAuthenticated && (
        <div className="buttons_center">
          <button className="button" onClick={() => dispatch(getPolls())}>
            All polls
          </button>
          <button className="button" onClick={() => dispatch(getUserPolls())}>
            My polls
          </button>
        </div>
      )}
      <ul className="polls">{allPolls}</ul>
    </React.Fragment>
  );
};

export default Polls;
