import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../Sidebar/Sidebar';
import './MobileSidebar.css';
import { Drawer } from '@mui/material';

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='mobile-sidebar'>
      <MenuIcon onClick={() => setOpen(!open)} />
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Sidebar />
      </Drawer>
    </div>
  );
};

export default MobileSidebar;
