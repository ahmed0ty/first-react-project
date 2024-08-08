import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Content from "../content/content";

const Layout = () => {
    return (
  
      <div>
        <Navbar/>
        <Outlet/>
        <Content/>
        
      </div>
      
    );
  };
  
  export default Layout;