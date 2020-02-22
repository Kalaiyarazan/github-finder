import React, { Fragment } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

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

export default Users;
