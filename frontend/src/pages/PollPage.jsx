import React, { useEffect } from 'react';
import Poll from '../components/Poll';
import ErrorMessage from '../components/ErrorMessage';

const PollPage = ({ poll }) => {
  return (
    <div>
      <ErrorMessage />
      {poll && <Poll poll={poll} />}
    </div>
  );
};

export default PollPage;
