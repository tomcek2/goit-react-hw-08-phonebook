import React, { Suspense } from 'react';
import { UserMenu } from './UserMenu';
import { NavLink, Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <UserMenu />
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
