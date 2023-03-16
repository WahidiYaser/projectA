import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Page404() {
  return (
    <div>
        <h1> PAGE404 </h1>
        <p> this page is not found </p>
        <Link to="/"> Home </Link>
        <Outlet/>
    </div>
  );
}

export default Page404;