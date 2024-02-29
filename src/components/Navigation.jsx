import React from 'react';
import { UserMenu } from './UserMenu';
import { NavLink, Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <UserMenu />
      </nav>
      <Outlet />
    </>
  );
};
