import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const ErrorMessage = () => {
  const error = useSelector((state) => state.error);

  return (
    <Fragment>
      {error?.message && <div className="error">{error.message}</div>}
    </Fragment>
  );
};

export default ErrorMessage;
