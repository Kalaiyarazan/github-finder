import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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

Alert.propTypes = {
  alert: PropTypes.object.isRequired
};

export default Alert;
