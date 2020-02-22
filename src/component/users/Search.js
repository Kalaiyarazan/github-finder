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
    console.log(this.state.search);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            name='search'
            placeholder='Search Users'
            value={this.state.search}
            onChange={this.onChange}
          />
          <input type='submit' value='Search' />
        </form>
      </div>
    );
  }
}

export default Search;
