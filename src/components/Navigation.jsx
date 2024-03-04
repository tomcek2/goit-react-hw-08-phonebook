import React, { Suspense } from 'react';
import { UserMenu } from './UserMenu';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        {!isLoggedIn && (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}

        <UserMenu />
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
