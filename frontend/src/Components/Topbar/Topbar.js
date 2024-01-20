import React from 'react';
import './Topbar.css';
import PrimaryBlueButton from '../PrimaryBlueButton/PrimaryBlueButton';
import PrimaryBorderButton from '../PrimaryBorderButton/PrimaryBorderButton';
import LogoutIcon from '@mui/icons-material/Logout';

const Topbar = () => {
  return (
    <div className='topbar'>
      <PrimaryBorderButton padding='8px 15px'>
        <div className='logout-btn'>
          <span>Logout</span>
          <LogoutIcon fontSize='15px' />
        </div>
      </PrimaryBorderButton>
    </div>
  );
};

export default Topbar;
