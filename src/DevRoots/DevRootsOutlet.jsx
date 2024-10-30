import React from 'react'
import TopBar from './components/TopBar';
import { Mode } from "@mui/icons-material";
import { Outlet } from 'react-router-dom';

export default function DevRootsOutlet() {
    const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <TopBar open={open}
        handleDrawerOpen={handleDrawerOpen} 
        setMode={Mode}/>


        <Outlet/>
      
    </div>
  )
}
