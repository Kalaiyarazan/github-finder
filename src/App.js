import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/layout/Navbar';
import Home from './component/pages/Home';
import NotFound from './component/pages/NotFound';
import Alert from './component/layout/Alert';
import About from './component/pages/About';
import User from './component/users/User';

import GithubState from './component/context/github/GithubState';
import AlertState from './component/context/alert/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='home-container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/users/:login' component={User} />
                <Route path='*' component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
