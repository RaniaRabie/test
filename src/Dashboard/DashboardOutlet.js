import React, { useMemo, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import BarChart from "./pages/Analystics/BarChart";
import PieChart from "./pages/Analystics/PieChart";
import LineChart from "./pages/Analystics/LineChart";
import AllUsers from "./pages/form/users/AllUsers";
import AddNewUser from "./pages/form/users/AddNewUser";
import Profile from "./pages/form/users/Profile";
import Setting from "./pages/setting/Setting";
import AllRoadmaps from "./pages/roadmap/create/AllRoadmaps";
import CreateRoadmap from "./pages/roadmap/create/CreateRoadmap";
import RoadmapDetails from "./pages/roadmap/create/Roadmapdetails";
import FAQ from "./pages/faq/FAQ";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";

export default function DashboardOutlet() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") || "light"
  );

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("currentMode", newMode);
  };
  // إعداد الثيم بناءً على الوضع الحالي
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark" && {
            background: {
              default: "#121212", // خلفية الصفحة بالكامل
              paper: "#1e1e1e", // خلفية العناصر مثل الكروت وغيرها
            },
            text: {
              primary: "#e0e0e0", // لون النصوص الرئيسية
              secondary: "#b3b3b3", // لون النصوص الثانوية
            },
            primary: {
              main: "#bb86fc", // لون البرايمري الرئيسي
            },
            secondary: {
              main: "#03dac6", // لون السكندري الرئيسي
            },
            error: {
              main: "#cf6679", // لون الخطأ
            },
          }),
          ...(mode === "light" && {
            background: {
              default: "#ffffff",
              paper: "#f5f5f5",
            },
            text: {
              primary: "#000000",
            },
          }),
        },
      }),
    [mode]
  );
  return (
    <ThemeProvider theme={theme}>
      <h2>Dashboard Section</h2>
      <Routes>
        {/* <Route path=":postId" element={<PostDetail />} /> */}
        <Route
          path="dashboard"
          element={<Dashboard newUsersCount={undefined} />}
        />
        <Route path="barchart" element={<BarChart />} />
        <Route path="piechart" element={<PieChart />} />
        <Route path="linechart" element={<LineChart />} />
        <Route path="allusers" element={<AllUsers />} />
        <Route path="addnewuser" element={<AddNewUser />} />
        <Route path="profile" element={<Profile />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="setting" element={<Setting />} />
        <Route path="allroadmaps" element={<AllRoadmaps />} />
        <Route path="create" element={<CreateRoadmap />} />
        <Route path="details" element={<RoadmapDetails />} />
        <Route path="/create/:id" element={<CreateRoadmap />} />
        <Route path="details/:id" element={<RoadmapDetails />} />
      </Routes>
      <Box sx={{ display: "flex" }}>
        <TopBar open={open} handleDrawerOpen={handleDrawerOpen} toggleMode={toggleMode} mode={mode} />
          <SideBar open={open} handleDrawerClose={handleDrawerClose} />
        
        <Box
          sx={{
            flexGrow: 1,
            mt: "45px",
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Box component="main">
            <Outlet />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
