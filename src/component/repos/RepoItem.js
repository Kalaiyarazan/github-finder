import React from 'react';
import { GoLinkExternal } from 'react-icons/go';
import PropTypes from 'prop-types';

const RepoItem = ({ repo: { html_url, name } }) => {
  return (
    <div className='repo-item'>
      <a href={html_url} target='_blank' rel='noopener noreferrer'>
        {name} <GoLinkExternal />
      </a>{' '}
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
