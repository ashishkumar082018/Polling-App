import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { createPoll } from '../store/actions';
// import { useNavigate } from 'react-router-dom';


const CreatePoll = ({ createPoll }) => {
  const [formData, setFormData] = useState({ question: '', options: ['', ''] });
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addAnswer = () => {
    setFormData({ ...formData, options: [...formData.options, ''] });
  };

  const handleAnswer = (e, index) => {
    const options = [...formData.options];
    options[index] = e.target.value;
    setFormData({ ...formData, options });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPoll(formData);
    // navigate('/');
  };

  const options = formData.options.map((option, i) => (
    <Fragment key={i}>
      <label className="form-label">option</label>
      <input
        className="form-input"
        type="text"
        value={option}
        onChange={(e) => handleAnswer(e, i)}
      />
    </Fragment>
  ));

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="question">
        question
      </label>
      <input
        className="form-input"
        type="text"
        name="question"
        value={formData.question}
        onChange={handleChange}
      />
      <div className="container">{options}</div>
      <div className="buttons_center">
        <button className="button" type="button" onClick={addAnswer}>
          Add options
        </button>
        <button className="button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default connect(null, { createPoll })(CreatePoll);
