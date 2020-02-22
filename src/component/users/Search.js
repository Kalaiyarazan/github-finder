import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.search);
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
      </div>
    );
  }
}

export default Search;
