import React from 'react';
import logo from '../assets/intivelogo.png';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <img src={logo} alt='logo' className='image' />
    </div>
  );
};

export default Navbar;
