
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar";
export default function DashboardOutlet() {

  

  return (
    <div>
        <TopBar open={undefined} toggleMode={undefined} mode={undefined}/>
      <Outlet/>
    </div>


  )
}
