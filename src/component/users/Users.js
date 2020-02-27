import React, { Fragment, useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;

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
