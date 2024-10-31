import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar";
import { Box } from "@mui/material";
export default function DashboardOutlet() {
  return (
    <div>
      <TopBar open={undefined} toggleMode={undefined} mode={undefined} />
      <Box sx={{mt:"45px"}}>
        <Outlet />
      </Box >
    </div>
  );
}
