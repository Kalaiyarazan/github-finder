import React, { Fragment } from 'react';
import UserItem from './UserItem';

const Users = ({ users, loading }) => {
  return (
    <Fragment>
      {loading ? (
        <div>Loading....</div>
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
