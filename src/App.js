import React, { Component } from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <h1>App Component</h1>
      </div>
    );
  }
}

export default App;
