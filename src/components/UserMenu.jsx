import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/auth/authOperations';
import { useAuth } from '../hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>{user.name}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};
