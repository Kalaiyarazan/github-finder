import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    search: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.showAlert(false);
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.search) {
      this.props.searchUsers(this.state.search);
    } else {
      this.showAlert(true);
    }
  };

  showAlert = toggle => {
    if (toggle) {
      this.props.setAlert('Please enter something', 'danger');
      setTimeout(() => {
        this.props.setAlert(null, null);
      }, 3000);
    } else {
      this.props.setAlert(null, null);
    }
  };

  render() {
    return (
      <div className='search'>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            name='search'
            placeholder='Search Users'
            value={this.state.search}
            onChange={this.onChange}
          />
          <button type='submit'>Search</button>
        </form>
        {this.props.showClear && (
          <button className='clear-btn' onClick={this.props.clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};
export default Search;
