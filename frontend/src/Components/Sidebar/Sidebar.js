import React from 'react';
import { ReactComponent as JobPortFullLogo } from '../../images/svg/Full-logo.svg';
import './Sidebar.css';
import { Avatar } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ menuItems }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div className='sidebar'>
      <JobPortFullLogo className='logo' />
      <div className='profile-details'>
        <Avatar src='' />
        <h4>Hello</h4>
      </div>
      <div className='menu-items'>
        {menuItems.map((menuItem) => {
          const menuItemClassName = ['menu-item'];
          if (location.pathname.includes(menuItem.title.toLowerCase())) {
            menuItemClassName.push('menu-item-active');
          }
          return (
            <Link to={`/candidate/${menuItem.title.toLowerCase()}`}>
              <div className={menuItemClassName.join(' ')}>
                {menuItem.icon}
                <span>{menuItem.title}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

Sidebar.defaultProps = {
  menuItems: [
    {
      title: 'Jobs',
      icon: <WorkOutlineIcon />,
    },
    { title: 'Profile', icon: <PermIdentityIcon /> },
  ],
};
