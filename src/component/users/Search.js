import React, { useState, useContext } from 'react';
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/alertContext';
import Alert from '../layout/Alert';

const Search = () => {
  const [search, setSearch] = useState('');

  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { searchUsers, clearUsers, users } = githubContext;

  const { setAlert, removeAlert } = alertContext;

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
      setAlert('Please enter something');
      setTimeout(() => {
        removeAlert();
      }, 3000);
    } else {
      removeAlert();
    }
  };

  return (
    <div className={`search ${users.length === 0 ? 'center' : 'full-width'}`}>
      <div className='alert-position'>
        <Alert />
      </div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='search'
          placeholder='Search Users'
          value={search}
          onChange={onChange}
        />
        <div className='search-buttons'>
          <button type='submit'>Search</button>
          {users.length > 0 && (
            <button className='clear-btn' onClick={clearUsers}>
              Clear
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
