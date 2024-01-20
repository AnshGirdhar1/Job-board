import React from 'react';
import { ReactComponent as JobPortFullLogo } from '../../images/svg/Full-logo.svg';
import './Navbar.css';
import PrimaryBlueButton from '../PrimaryBlueButton/PrimaryBlueButton';
import PrimaryBorderButton from '../PrimaryBorderButton/PrimaryBorderButton';

const Navbar = ({ setIsFormTypeLogin }) => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <JobPortFullLogo />
      </div>
      <div className='menu'>
        <PrimaryBlueButton onClick={() => setIsFormTypeLogin(true)}>
          Login
        </PrimaryBlueButton>
        <PrimaryBorderButton onClick={() => setIsFormTypeLogin(false)}>
          Signup
        </PrimaryBorderButton>
      </div>
    </div>
  );
};

export default Navbar;
