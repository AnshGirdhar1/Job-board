import React from 'react';
import { Navigate } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Jobs from '../Jobs/Jobs';
import './Layout.css';
import Topbar from '../../Components/Topbar/Topbar';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Sidebar />
      <div className='module-with-topbar'>
        <Topbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
