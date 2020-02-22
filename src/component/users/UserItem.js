import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  return (
    <Fragment>
      <div className='user-card'>
        <img src={avatar_url} alt='avatar' />
        <h3>{login}</h3>
        <a className='btn' href={html_url}>
          View Profile
        </a>
      </div>
    </Fragment>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
