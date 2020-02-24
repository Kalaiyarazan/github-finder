import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ icon = 'fab fa-github fa-2x', title = 'Github Finder' }) => {
  return (
    <nav className='navbar'>
      <div className='nav-header'>
        <i className={icon} />
        <h1>{title}</h1>
      </div>

      <div className='nav-menu'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
