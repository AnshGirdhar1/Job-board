import React from 'react';
// import { Navigate } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
// import Jobs from '../Jobs/Jobs';
import './Layout.css';
import Topbar from '../../Components/Topbar/Topbar';
import MobileSidebar from '../../Components/MobileSidebar/MobileSidebar';
import { useMediaQuery } from '@mui/material';

const Layout = ({ children }) => {
  const isMobileOrTab = useMediaQuery('(max-width:800px)');
  console.log(isMobileOrTab);
  return (
    <div className='layout'>
      {!isMobileOrTab && <Sidebar />}
      <div className='module-with-topbar'>
        <Topbar isMobileOrTab={isMobileOrTab} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
