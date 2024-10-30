import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Home from "./Home";
import BlogLayout from "./BlogLayout";
import About from "./About";
import DashboardOutlet from "./Dashboard/DashboardOutlet";
import RoadmapList from "./DevRoots/Home/RoadmapList";
import Login from "./DevRoots/pages/login/Login";
import SignUp from "./DevRoots/pages/login/SignUp";
import ForgotPassword from "./DevRoots/pages/login/Forget Password/ForgotPassword";
import SetNewPassword from "./DevRoots/pages/login/Forget Password/SetNewPassword";
import Roadmap from "./DevRoots/roadmap/Roadmap";
import TopBar from "./DevRoots/components/TopBar";
import { Mode } from "@mui/icons-material";

function App() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <TopBar open={open}
        handleDrawerOpen={handleDrawerOpen} 
        setMode={Mode}/>
      <div>topbar</div>
        <Routes>
          <Route path="/" element={<RoadmapList />} />
          <Route path="blog/*" element={<BlogLayout />} />
          <Route path="about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/SetNewPassword" element={<SetNewPassword />} />
          <Route path="roadmap/:id" element={<Roadmap />} />
          <Route path="dashboard/*" element={<DashboardOutlet />} />
        </Routes>
      <Outlet />
    </div>
  );
}

export default App;
