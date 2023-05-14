import React from "react";

import { NavLink, Outlet, useLocation } from "react-router-dom";
import Mode from "../Mode/Mode";
import Navbar from "../N/Navbar";
import Navconnect from "../Navconnect/Navconnect";

const Layout = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/Profile" && <Navconnect />}
      {location.pathname === "/Account" && <Navconnect />}
      {location.pathname === "/Login" && <Navbar />}
      {location.pathname === "/Register" && <Navbar />}
      {location.pathname === "/" && <Navbar />}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
