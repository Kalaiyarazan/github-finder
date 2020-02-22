import React, { Component } from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({ users: res.data, loading: false });
  }

  render() {
    const { users, loading } = this.state;
    return (
      <div className='App'>
        <Navbar />
        <Users users={users} loading={loading} />
      </div>
    );
  }
}

export default App;
