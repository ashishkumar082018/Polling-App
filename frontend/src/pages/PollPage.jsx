import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurrentPoll } from '../store/actions';
import Poll from '../components/Poll';
import ErrorMessage from '../components/ErrorMessage';

const PollPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const poll = useSelector((state) => state.currentPoll);

  useEffect(() => {
    dispatch(getCurrentPoll(id));
  }, [id, dispatch]);

  return (
    <div>
      <ErrorMessage />
      {poll && <Poll poll={poll} />}
    </div>
  );
};

export default PollPage;
