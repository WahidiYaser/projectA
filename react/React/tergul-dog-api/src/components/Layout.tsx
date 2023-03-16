import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../views/stylesheets/layoutStyleSheet.css";

function Layout() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Layout;