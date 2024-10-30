/*
- File Name: App.js
- Author: shrouk ahmed
- Date of Creation: 17/9/2024
- Versions Information: 1.0.0
- Dependencies:
  {
  REACT , 
  react-router-dom ,
  SideBar file
  }
- Contributors: shrouk ahmed,Nourhan khaled
- Last Modified Date: 17/10/2024
- Description : 
*/import React, { useState } from "react";
import {
  Box,
  IconButton,
  Stack,
  Toolbar,
  AppBar as MuiAppBar,
  styled,
} from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
const drawerWidth = 240;


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const TopBar = ({ open, toggleMode, mode }) => {

  return (
    <AppBar position="fixed" open={open} sx={{ height: "45px",  backgroundColor: mode === "dark" ? "#000000" : "#1d242f", }}>
      <Toolbar sx={{ minHeight: { xs: 0, sm: 0 } }}>

        <Box flexGrow="1" />
        <Stack direction="row" spacing={1}>
          {/* Dark mode toggle button */}
          <IconButton onClick={toggleMode} color="inherit">
            {mode === "light" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
          </IconButton>
          {/* Profile icon */}
          <IconButton color="inherit">
            <Person2OutlinedIcon />
          </IconButton>
          
          <IconButton color="inherit">
            <NotificationsNoneOutlinedIcon />
          </IconButton>

          <IconButton color="inherit">
            <SettingsOutlinedIcon />
          </IconButton> 
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
