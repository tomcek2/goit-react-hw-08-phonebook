import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { Navigation } from './Navigation';
import Register from 'pages/Register';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export const Phonebook = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
