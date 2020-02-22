import React from 'react';

const Navbar = ({ icon = 'fab fa-github fa-2x', title = 'Github Finder' }) => {
  return (
    <nav className='navbar'>
      <i className={icon} />
      <h1>{title}</h1>
    </nav>
  );
};

export default Navbar;
