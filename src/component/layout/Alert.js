import React, { Fragment } from 'react';

const Alert = ({ alert: { message, type } }) => {
  return (
    <Fragment>
      {message && (
        <div className={`alert ${type}`}>
          <p>{message}</p>
        </div>
      )}
    </Fragment>
  );
};

export default Alert;
