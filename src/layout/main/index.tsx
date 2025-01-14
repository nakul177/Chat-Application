import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";
import NavBar from "./NavBar";

const Main = () => {
    return (
        <>
           <NavBar />
            <div className="flex col bg-background ">
                <div className="flex-none ">
                    <SideBar />
                </div>
                <div className="flex-1">
            
                        <Outlet />
                    
                </div>
            </div>
        </>
    )
}

export default Main;