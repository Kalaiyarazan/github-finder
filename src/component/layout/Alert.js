import React, { Fragment, useContext } from 'react';
import AlertContext from '../context/alert/alertContext';
import { IoMdAlert } from 'react-icons/io';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  return (
    <Fragment>
      {alert && (
        <div className='alert'>
          <p>
            <IoMdAlert size='25px' />
          </p>
          <p>{alert}</p>
        </div>
      )}
    </Fragment>
  );
};

export default Alert;
