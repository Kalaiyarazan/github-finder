import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  //Defaul Props in class Component
  static defaultProps = {
    icon: 'fab fa-github fa-2x',
    title: 'Github Finder'
  };

  render() {
    return (
      <nav className='navbar'>
        <i className={this.props.icon} />
        <h1>{this.props.title}</h1>
      </nav>
    );
  }
}

//PropType Check
Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Navbar;
