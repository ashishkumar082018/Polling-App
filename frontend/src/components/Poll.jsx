import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { vote } from '../store/actions';
import { color } from '../services/color';

Chart.register(ArcElement, Tooltip, Legend);

const Poll = () => {
  const poll = useSelector((state) => state.currentPoll);
  const dispatch = useDispatch();

  if (!poll) return <p>Loading...</p>; // Add a loading state or message

  const handleVote = (option) => {
    dispatch(vote(poll._id, { answer: option }));
  };

  const answers = poll.options?.map((option) => (
    <button
      onClick={() => handleVote(option.option)}
      className="button"
      key={option._id}>
      {option.option}
    </button>
  ));

  const data = {
    labels: poll.options.map((option) => option.option),
    datasets: [
      {
        label: poll.question,
        backgroundColor: poll.options.map(() => color()),
        borderColor: '#323643',
        data: poll.options.map((option) => option.votes),
      },
    ],
  };

  return (
    <div>
      <h3 className="poll-title">{poll.question}</h3>
      <div className="buttons_center">{answers}</div>
      <Pie data={data} />
    </div>
  );
};

export default Poll;
