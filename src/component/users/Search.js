import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ showClear, clearUsers, searchUsers, setAlert }) => {
  const [search, setSearch] = useState('');

  const onChange = e => {
    setSearch(e.target.value);
    showAlert(false);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (search) {
      searchUsers(search);
    } else {
      showAlert(true);
    }
  };

  const showAlert = toggle => {
    if (toggle) {
      setAlert('Please enter something', 'danger');
      setTimeout(() => {
        setAlert(null, null);
      }, 3000);
    } else {
      setAlert(null, null);
    }
  };

  return (
    <div className='search'>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='search'
          placeholder='Search Users'
          value={search}
          onChange={onChange}
        />
        <button type='submit'>Search</button>
      </form>
      {showClear && (
        <button className='clear-btn' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};
export default Search;
