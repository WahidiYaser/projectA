import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
        <ul>
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="/about"> ABOUT </Link>
            </li>
            <li>
                <Link to="/notExict"> Not Exict </Link>
            </li>
        </ul>
        <hr />
        <Outlet/>
    </div>
  );
}

export default Layout;