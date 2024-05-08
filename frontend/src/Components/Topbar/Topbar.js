import React from 'react';
import './Topbar.css';
// import PrimaryBlueButton from '../PrimaryBlueButton/PrimaryBlueButton';
import PrimaryBorderButton from '../PrimaryBorderButton/PrimaryBorderButton';
import LogoutIcon from '@mui/icons-material/Logout';
import MobileSidebar from '../MobileSidebar/MobileSidebar';
import { ReactComponent as JobPortFullLogo } from '../../images/svg/Full-logo.svg';

const Topbar = ({ isMobileOrTab }) => {
  return (
    <div className='topbar'>
      {isMobileOrTab && (
        <div className='mobile-topbar-additions'>
          <MobileSidebar />
          <JobPortFullLogo style={{ width: '100px' }} />
        </div>
      )}
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
