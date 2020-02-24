import React, { Fragment } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div className='users-container'>
          {users.map(user => (
            <div className='user-item-container' key={user.id}>
              <UserItem user={user} />
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;
