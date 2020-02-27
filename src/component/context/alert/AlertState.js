import React, { useReducer } from 'react';
import AlertReducer from './alertReducer';
import AlertContext from './alertContext';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = message => dispatch({ type: SET_ALERT, payload: message });
  const removeAlert = () => dispatch({ type: REMOVE_ALERT });

  return (
    <AlertContext.Provider value={{ alert: state, setAlert, removeAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
