import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import SideBar from "./components/SideBar";
import { useMemo, useState } from "react";
import { getDesignTokens } from "theme";
export default function DashboardOutlet() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode, setMode] = useState(
    localStorage.getItem("currentMode")
      ? localStorage.getItem("currentMode")
      : "light"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    // <div>
    //   <TopBar
    //     open={open}
    //     handleDrawerOpen={handleDrawerOpen}
    //     setMode={setMode}
    //   />
    //   <Box sx={{ mt: "45px" }}>

    //     <Outlet />
    //   </Box>
    // </div>

    <ThemeProvider theme={theme}>
      <CssBaseline />

      <TopBar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        setMode={setMode}
      />

      <Box component="main" sx={{ mt: "45px" }}>
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}
